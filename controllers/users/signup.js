const { addUser } = require('../../model/users')
const Joi = require('joi')

const joiSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
})

const signup = async (req, res) => {
  const { error } = joiSchema.validate(req.body)

  if (error) {
    res.status(400).json({
      Status: '400 Bad Request',
      'Content-Type': 'application/json',
      ResponseBody: 'Validation error',
    })
    return
  }

  const result = await addUser(req.body)

  if (!result) {
    res.status(409).json({
      Status: '409 Conflict',
      'Content-Type': 'application/json',
      ResponseBody: {
        message: 'Email in use',
      },
    })
    return
  }

  res.status(201).json({
    Status: '201 Created',
    'Content-Type': 'application/json',
    ResponseBody: {
      user: {
        email: result.email,
        subscription: result.subscription,
      },
    },
  })
}

module.exports = {
  signup,
}
