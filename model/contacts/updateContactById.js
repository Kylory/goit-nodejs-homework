// const { ObjectID } = require('mongodb')
// const { connectMongo } = require('../../db/connection')
const { Contact } = require('../../db/contactModel')

// Update contact by ID
// const updateContactById = async (id, data) => {
//   const { Contacts } = await connectMongo()

//   const objectId = new ObjectID(id)

//   return await Contacts.updateOne({ _id: objectId }, { $set: data })
// }

const updateContactStatusById = (id, data) => {
  return Contact.findByIdAndUpdate({ _id: id }, data, { new: true })
}

module.exports = updateContactStatusById
