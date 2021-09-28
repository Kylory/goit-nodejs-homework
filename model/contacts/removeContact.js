const { ObjectID } = require('mongodb')
const { connectMongo } = require('../../db/connection')

// Remove contact by ID
const removeContact = async (id) => {
  const { Contacts } = await connectMongo()
  const objectId = new ObjectID(id)

  const result = await Contacts.deleteOne({ _id: objectId })
  return result
}

module.exports = removeContact
