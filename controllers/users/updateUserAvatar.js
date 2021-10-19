const fs = require('fs').promises
const path = require('path')
const { v4 } = require('uuid')

const updateUserAvatar = async (req, res, next) => {
  const { path: tempDir, originalname } = req.file

  const id = v4()
  const [extension] = originalname.split(' ').reverse()
  const filename = `${id}-${extension}`

  // TODO: додати оновлення avatarURL юзера
  const uploadDir = path.join(__dirname, '../../', 'public/avatars', filename)
  try {
    await fs.rename(tempDir, uploadDir)
    res.json({
      ResponseBody: {
        avatarURL: uploadDir,
      },
    })
  } catch (error) {
    await fs.unlink(tempDir)
    next(error)
  }
}

module.exports = { updateUserAvatar }
