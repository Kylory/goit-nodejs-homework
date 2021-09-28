const { ObjectID } = require('mongodb')
const { connectMongo } = require('../../db/connection')

// Get contact by ID
const getContactById = async (id) => {
  const { Contacts } = await connectMongo()

  const objectId = new ObjectID(id)

  const contact = await Contacts.find({ _id: objectId }).toArray()
  return contact
}

module.exports = getContactById
