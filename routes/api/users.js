const express = require('express')
const router = express.Router()
const { controllerWrapper, authMiddleware } = require('../../middlewares')
const {
  signup,
  login,
  logout,
  current,
  subscription,
} = require('../../controllers/users')

router.post('/signup', controllerWrapper(signup))

router.post('/login', controllerWrapper(login))

router.use(authMiddleware)

router.post('/logout', controllerWrapper(logout))

router.get('/current', controllerWrapper(current))

router.patch('/subscription', controllerWrapper(subscription))

module.exports = router
