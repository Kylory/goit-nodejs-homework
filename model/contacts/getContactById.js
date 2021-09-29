const { ObjectID } = require('mongodb')
const { connectMongo } = require('../../db/connection')

// Get contact by ID
const getContactById = async (id) => {
  const { Contacts } = await connectMongo()

  const objectId = new ObjectID(id)

  return await Contacts.find({ _id: objectId }).toArray()
}

module.exports = getContactById
