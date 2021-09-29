// const { connectMongo } = require('../../db/connection')
const { Contact } = require('../../db/contactModel')

// Get all contacts
// const getAllContacts = async (req, res) => {
//   const { Contacts } = await connectMongo()
//   return await Contacts.find({}).toArray()
// }

const getAllContacts = async (req, res) => {
  return await Contact.find({})
}

module.exports = getAllContacts
