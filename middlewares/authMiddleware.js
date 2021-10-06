/* eslint-disable no-unused-vars */
const jwt = require('jsonwebtoken')
require('dotenv').config()

const authMiddleware = (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401).json({
      Status: '401 Unauthorized',
      'Content-Type': 'application/json',
      ResponseBody: {
        message: 'Not authorized',
      },
    })

    return
  }

  const [tokenType, token] = req.headers.authorization.split(' ')

  if (!token) {
    res.status(401).json({
      Status: '401 Unauthorized',
      'Content-Type': 'application/json',
      ResponseBody: {
        message: 'Not authorized',
      },
    })

    return
  }

  try {
    const userId = jwt.decode(token, process.env.JWT_SECRET)
    if (!userId) {
      res.status(401).json({
        Status: '401 Unauthorized',
        'Content-Type': 'application/json',
        ResponseBody: {
          message: 'Not authorized',
        },
      })

      return
    }
    req.token = token
    req.user = userId
  } catch (error) {
    res.status(401).json({
      Status: '401 Unauthorized',
      'Content-Type': 'application/json',
      ResponseBody: {
        message: 'Not authorized',
      },
    })
  }
  next()
}

module.exports = authMiddleware
