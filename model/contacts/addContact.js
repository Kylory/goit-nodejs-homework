// const { connectMongo } = require('../../db/connection')
const { Contact } = require('../../db/contactModel')

// Add new contact
// const addContact = async ({ name, email, phone, favorite }) => {
//   const { Contacts } = await connectMongo()

//   return await Contacts.insertOne({ name, email, phone, favorite })
// }

const addContact = async ({ name, email, phone, favorite }) => {
  // const contact = new Contact({ name, email, phone, favorite })
  // await contact.create()
  // return contact

  return await Contact.create({ name, email, phone, favorite })
}

module.exports = addContact
