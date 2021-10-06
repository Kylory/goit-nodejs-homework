const { addUser } = require('../../model/users')
// const { BadRequest } = require('http-errors')
const Joi = require('joi')

const joiSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
})

const signup = async (req, res, next) => {
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

  const result = await addUser(req.body)
  // console.log(result)

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
