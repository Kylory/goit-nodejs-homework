const express = require('express')
const logger = require('morgan')
const cors = require('cors')
// const multer = require('multer')
// const path = require('path')
// const fs = require('fs').promises
// const { v4 } = require('uuid')

const contactsRouter = require('./routes/api/contacts')
const usersRouter = require('./routes/api/users')

// const tempDir = path.join(__dirname, 'temp')

// const uploadConfig = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, tempDir)
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname)
//   },
//   limits: {
//     fileSize: 4096,
//   },
// })

// const upload = multer({
//   storage: uploadConfig,
// })

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())
app.use(express.static('public'))
// app.use(upload())

app.use('/api/contacts', contactsRouter)
app.use('/api/users', usersRouter)

// app.post(
// '/api/users/avatars',
// upload.single('image')
// async (req, res, next) => {
//   const { path: tempDir, originalname } = req.file

//   const id = v4()
//   const [extension] = originalname.split(' ').reverse()
//   const filename = `${id}-${extension}`

//   const uploadDir = path.join(__dirname, 'public/avatars', filename)
//   try {
//     await fs.rename(tempDir, uploadDir)
//     res.json({
//       ResponseBody: {
//         avatarURL: uploadDir,
//       },
//     })
//   } catch (error) {
//     await fs.unlink(tempDir)
//     next(error)
//   }
// }
// )

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err
  res.status(status).json({ message })
})

module.exports = app
