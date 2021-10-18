const { current } = require('./current')
const { login } = require('./login')
const { logout } = require('./logout')
const { signup } = require('./signup')
const { subscription } = require('./subscription')
const { uploadAvatar } = require('./avatar')

module.exports = {
  current,
  login,
  logout,
  signup,
  subscription,
  uploadAvatar,
}
