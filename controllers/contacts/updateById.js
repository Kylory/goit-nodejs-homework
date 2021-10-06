const { updateContactById } = require('../../model/contacts/index')
const { NotFound, BadRequest } = require('http-errors')
const Joi = require('joi')

const joiSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
})

const updateById = async (req, res, next) => {
  const { _id } = req.user
  const id = req.params.contactId
  const data = req.body
  const { error } = joiSchema.validate(req.body)

  if (error) {
    throw new BadRequest('missing fields')
  }

  if (!Object.keys(data).length) {
    throw new BadRequest('missing fields')
  }

  const udatedContact = await updateContactById(id, _id, data)

  if (!udatedContact) {
    throw new NotFound(`Contact with id ${id} not found`)
  }

  res.json({ message: 'Contact updated', udatedContact: udatedContact })
}

module.exports = { updateById }
