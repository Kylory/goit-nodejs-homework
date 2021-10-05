const express = require('express')
const router = express.Router()
const { controllerWrapper } = require('../../middlewares')
const { signup, login, logout, current } = require('../../controllers/users')

router.post('/signup', controllerWrapper(signup))

router.post('/login', controllerWrapper(login))

router.post('/logout', controllerWrapper(logout))

router.post('/current', controllerWrapper(current))

module.exports = router
