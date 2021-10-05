const { Contact } = require('../../db/contactModel')

const getAllContacts = async (req, res) => {
  return await Contact.find({})
}

module.exports = getAllContacts
