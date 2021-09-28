const { MongoClient } = require('mongodb')
const collections = require('./collections')

const connectMongo = async () => {
  const client = await MongoClient.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  const db = client.db()

  collections.Contacts = db.collection('contacts')
  // const contacts = await Contacts.find({}).toArray()
  // console.log(contacts)
}

module.exports = {
  connectMongo,
}
