const { connectMongo } = require('../../db/connection')

const getAllContacts = async (req, res) => {
  const { Contacts } = await connectMongo()

  const contacts = await Contacts.find({}).toArray()
  return contacts
}

module.exports = getAllContacts
