const { updateUserSubscription } = require('../../model/users')
const { BadRequest } = require('http-errors')
const Joi = require('joi')

const joiSchema = Joi.object({
  subscription: Joi.string().required(),
})

const subscription = async (req, res, next) => {
  const { _id } = req.user
  const data = req.body
  // console.log('data', data.subscription)
  const { error } = joiSchema.validate(req.body)

  if (error) {
    throw new BadRequest('missing field subscription')
  }

  if (!['starter', 'pro', 'business'].includes(data.subscription)) {
    throw new BadRequest('incorrect field subscription')
  }

  const udatedUser = await updateUserSubscription(_id, data)

  res.json({ message: 'updateUserSubscription', udatedUser: udatedUser })
}

module.exports = { subscription }
