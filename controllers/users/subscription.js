const { updateUserSubscription } = require('../../model/contacts')
const { BadRequest } = require('http-errors')
const Joi = require('joi')

const joiSchema = Joi.object({
  subscription: Joi.string().required(),
})

const subscription = async (req, res, next) => {
  const { _id } = req.user
  const data = req.body
  const { error } = joiSchema.validate(req.body)

  if (error) {
    throw new BadRequest('missing field favorite')
  }

  const udatedContact = await updateUserSubscription(_id, data)

  res.json({ message: 'Contact updated', udatedContact: udatedContact })
}

module.exports = { subscription }
