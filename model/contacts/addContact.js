const { connectMongo } = require('../../db/connection')

// Add new contact
const addContact = async ({ name, email, phone, favorite }) => {
  const { Contacts } = await connectMongo()

  return await Contacts.insertOne({ name, email, phone, favorite })
}

module.exports = addContact
