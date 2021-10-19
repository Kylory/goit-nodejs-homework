const { current } = require('./current')
const { login } = require('./login')
const { logout } = require('./logout')
const { signup } = require('./signup')
const { subscription } = require('./subscription')
const { updateUserAvatar } = require('./updateUserAvatar')

module.exports = {
  current,
  login,
  logout,
  signup,
  subscription,
  updateUserAvatar,
}
