const { User } = require('../../db/userModel')
const bcrypt = require('bcrypt')

const addUser = async ({ email, password }) => {
  const user = await User.findOne({ email })

  if (user) {
    return null
  }

  return await User.create({ email, password: await bcrypt.hash(password, 10) })
}

module.exports = addUser
