const { loginUser } = require('../../model/users')
// const { BadRequest, Unauthorized } = require('http-errors')
const Joi = require('joi')

const joiSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
})

const login = async (req, res, next) => {
  const { error } = joiSchema.validate(req.body)

  if (error) {
    // throw new BadRequest('missing required field')
    res.status(400).json({
      Status: '400 Bad Request',
      'Content-Type': 'application/json',
      ResponseBody: 'Validation error',
    })
    return
  }

  const result = await loginUser(req.body)

  if (!result) {
    // throw new Unauthorized('Authorization error')
    res.status(401).json({
      Status: '401 Unauthorized',
      ResponseBody: {
        message: 'Email or password is wrong',
      },
    })
    return
  }

  // res.status(201).json({ message: 'Log in successful', token: result })
  res.status(201).json({
    Status: '200 OK',
    'Content-Type': 'application/json',
    ResponseBody: {
      token: result.token,
      user: {
        email: result.user.email,
        subscription: result.user.subscription,
      },
    },
  })
}

module.exports = {
  login,
}
