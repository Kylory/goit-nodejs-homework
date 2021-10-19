const express = require('express')
const router = express.Router()
const {
  controllerWrapper,
  authMiddleware,
  updateAvatar,
} = require('../../middlewares')

const {
  signup,
  login,
  logout,
  current,
  subscription,
  updateUserAvatar,
} = require('../../controllers/users')

// Для всіх маршрутів, які будуть нижче
// router.use(authMiddleware)

// Або писати authMiddleware в усіх, де потрібно

router.patch('/', authMiddleware, controllerWrapper(subscription))

router.post('/signup', controllerWrapper(signup))

router.post('/login', controllerWrapper(login))

router.post('/logout', authMiddleware, controllerWrapper(logout))

router.get('/current', authMiddleware, controllerWrapper(current))

router.patch(
  '/avatars',
  authMiddleware,
  updateAvatar.single('image'),
  controllerWrapper(updateUserAvatar)
)

module.exports = router
