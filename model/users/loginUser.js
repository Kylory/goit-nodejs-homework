const { User } = require('../../db/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email })

  if (!user) {
    return null
  }

  const checkPassword = await bcrypt.compare(password, user.password)

  if (!checkPassword) {
    return null
  }

  const token = jwt.sign(
    {
      _id: user._id,
    },
    process.env.JWT_SECRET
  )

  return {
    token,
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  }
}

module.exports = loginUser
