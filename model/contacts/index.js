const getAllContacts = require('./getAllContacts')
const getContactById = require('./getContactById')
const addContact = require('./addContact')
const removeContact = require('./removeContactById')
const updateContactById = require('./updateContactById')

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  removeContact,
  updateContactById,
}
