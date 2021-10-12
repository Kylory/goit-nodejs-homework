const { User } = require('../../db/userModel')

const updateUserSubscription = (id, data) => {
  //   console.log(id, data)
  return User.findByIdAndUpdate({ _id: id }, data)
}

module.exports = updateUserSubscription
