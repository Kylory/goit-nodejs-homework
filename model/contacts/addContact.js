const { Contact } = require('../../db/contactModel')

const addContact = async ({ name, email, phone, favorite = false }) => {
  return await Contact.create({ name, email, phone, favorite })
}

module.exports = addContact
