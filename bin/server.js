const app = require('../app')
require('dotenv').config()
const { MongoClient } = require('mongodb')

const PORT = process.env.PORT || 3000

// app.listen(PORT, () => {
//   console.log(`Server running. Use our API on port: ${PORT}`)
// })

const start = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  const db = client.db()

  const Contacts = db.collection('contacts')
  const contacts = await Contacts.find({}).toArray()
  console.log(contacts)

  app.listen(PORT, (error) => {
    if (error) console.error('Error at server launch:', error)
    console.log(`Server running. Use our API on port: ${PORT}`)
  })
}

start()
