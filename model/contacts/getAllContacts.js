const { Contact } = require('../../db/contactModel')

const getAllContacts = async (owner) => {
  return await Contact.find({ owner })
}

module.exports = getAllContacts
