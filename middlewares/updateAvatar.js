const multer = require('multer')
const path = require('path')
// const fs = require('fs').promises
// const { v4 } = require('uuid')

// const updateAvatar = async () => {
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

const updateAvatar = multer({
  storage: uploadConfig,
})
// }

module.exports = updateAvatar
