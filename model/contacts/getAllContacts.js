const { connectMongo } = require('../../db/connection')

// Get all contacts
const getAllContacts = async (req, res) => {
  const { Contacts } = await connectMongo()

  return await Contacts.find({}).toArray()
}

module.exports = getAllContacts
