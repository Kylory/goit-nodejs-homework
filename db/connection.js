// const { MongoClient } = require('mongodb')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
require('dotenv').config()

// main().catch((err) => console.log(err))

const connectMongo = async () => {
  return mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  // const client = await MongoClient.connect(process.env.MONGO_URL, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // })
  // const db = client.db()

  // const Contacts = db.collection('contacts')
  // console.log('DB connected successfully')

  // return { Contacts }
}

module.exports = {
  connectMongo,
}
