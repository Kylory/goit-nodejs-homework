// const { ObjectID } = require('mongodb')
// const { connectMongo } = require('../../db/connection')
const { Contact } = require('../../db/contactModel')

// Get contact by ID
// const getContactById = async (id) => {
//   const { Contacts } = await connectMongo()

//   const objectId = new ObjectID(id)

//   return await Contacts.find({ _id: objectId }).toArray()
// }

const getContactById = async (id) => {
  return await Contact.findOne({ _id: id })
}

module.exports = getContactById
