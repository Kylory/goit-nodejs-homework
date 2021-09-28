const { ObjectID } = require('mongodb')
const { connectMongo } = require('../../db/connection')

// Get contact by ID
const updateContactById = async (id, data) => {
  const { Contacts } = await connectMongo()

  const objectId = new ObjectID(id)

  await Contacts.updateOne({ _id: objectId }, { $set: data })
}

module.exports = updateContactById
