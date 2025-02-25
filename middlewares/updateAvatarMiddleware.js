const multer = require('multer')
const path = require('path')

const tempDir = path.join(__dirname, '../', 'temp')
const uploadConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir)
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
  limits: {
    fileSize: 4096,
  },
})

const updateAvatarMiddleware = multer({
  storage: uploadConfig,
})

module.exports = updateAvatarMiddleware
