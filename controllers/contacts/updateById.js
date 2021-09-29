const { updateContactById } = require('../../model/contacts/index')
const { NotFound, BadRequest } = require('http-errors')
const Joi = require('joi')

const joiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean().required(),
})

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

module.exports = { updateById }
