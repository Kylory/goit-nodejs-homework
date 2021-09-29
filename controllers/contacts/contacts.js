const { NotFound, BadRequest } = require('http-errors')
const Joi = require('joi')

const {
  getAllContacts,
  getContactById,
  removeContact,
  addContact,
  updateContactById,
} = require('../../model/contacts/index')

const joiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean().required(),
})

const getAll = async (req, res, next) => {
  const contacts = await getAllContacts()

  res.status(200).json({ contacts })
}

const getById = async (req, res, next) => {
  const id = req.params.contactId
  const contact = await getContactById(id)

  if (contact.length === 0) {
    throw new NotFound(`Contact with id ${id} not found`)
  }

  res.json(contact)
}

const add = async (req, res, next) => {
  const { error } = joiSchema.validate(req.body)

  if (error) {
    throw new BadRequest('missing required name field')
  }

  const newContact = await addContact(req.body)

  res.status(201).json({ message: 'Added new contact', newContact: newContact })
}

const removeById = async (req, res, next) => {
  const id = req.params.contactId
  const result = await removeContact(id)

  if (!result.deletedCount) {
    throw new NotFound(`Contact with id ${id} not found`)
  }

  res.json({ message: 'Contact removed' })
}

const updateById = async (req, res, next) => {
  const id = req.params.contactId
  const data = req.body
  const { error } = joiSchema.validate(req.body)

  if (error) {
    throw new BadRequest('missing fields')
  }

  const udatedContact = await updateContactById(id, data)

  if (!udatedContact.modifiedCount) {
    throw new NotFound(`Contact with id ${id} not found`)
  }

  res.json({ message: 'Contact updated', udatedContact: udatedContact })
}

module.exports = {
  getAll,
  getById,
  add,
  updateById,
  removeById,
}
