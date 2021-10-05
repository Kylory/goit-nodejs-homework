const { loginUser } = require('../../model/users')
const { BadRequest, Unauthorized } = require('http-errors')
const Joi = require('joi')

const joiSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
})

const login = async (req, res, next) => {
  const { error } = joiSchema.validate(req.body)

  if (error) {
    throw new BadRequest('missing required field')
  }

  const result = await loginUser(req.body)

  if (!result) {
    throw new Unauthorized('Authorization error')
  }

  res.status(201).json({ message: 'Log in successful', token: result })
}

module.exports = {
  login,
}
