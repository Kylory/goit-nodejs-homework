const { addContact } = require('../../model/contacts/index')
const { BadRequest } = require('http-errors')
const Joi = require('joi')

const joiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
})

const add = async (req, res, next) => {
  const { error } = joiSchema.validate(req.body)

  if (error) {
    throw new BadRequest('missing required field')
  }

  const newContact = await addContact(req.body)

  res.status(201).json({ message: 'Added new contact', newContact: newContact })
}

module.exports = {
  add,
}
