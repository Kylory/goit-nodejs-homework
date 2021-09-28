const { connectMongo } = require('../../db/connection')

// Add new contact
const addContact = async ({ name, email, phone, favorite }) => {
  const { Contacts } = await connectMongo()

  const result = await Contacts.insertOne({ name, email, phone, favorite })

  return result
}

module.exports = addContact
