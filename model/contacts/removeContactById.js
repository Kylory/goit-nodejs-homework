const { ObjectID } = require('mongodb')
const { connectMongo } = require('../../db/connection')

// Remove contact by ID
const removeContactById = async (id) => {
  const { Contacts } = await connectMongo()
  const objectId = new ObjectID(id)

  return await Contacts.deleteOne({ _id: objectId })
}

module.exports = removeContactById
