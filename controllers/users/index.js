const { current } = require('./current')
const { login } = require('./login')
const { logout } = require('./logout')
const { signup } = require('./signup')
const { subscription } = require('./subscription')
const { avatar } = require('./avatar')
const { verify } = require('./verify')

module.exports = {
  current,
  login,
  logout,
  signup,
  subscription,
  avatar,
  verify,
}
