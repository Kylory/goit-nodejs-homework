// const { ObjectID } = require('mongodb')
// const { connectMongo } = require('../../db/connection')
const { Contact } = require('../../db/contactModel')

// Remove contact by ID
// const removeContactById = async (id) => {
//   const { Contacts } = await connectMongo()
//   const objectId = new ObjectID(id)

//   return await Contacts.deleteOne({ _id: objectId })
// }

const removeContactById = async (id) => {
  return await Contact.findByIdAndRemove({ _id: id })
}

module.exports = removeContactById
