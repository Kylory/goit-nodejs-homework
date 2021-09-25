/* eslint-disable eqeqeq */
const fs = require('fs/promises')
const path = require('path')
const contactsPath = path.join(__dirname, '..', 'contacts.json')
const getAllContacts = require('./getAllContacts')

// Get contact by ID
const updateContactById = async (id, data) => {
  const contacts = await getAllContacts()
  const index = contacts.findIndex((item) => item.id == id)

  if (index < 0) {
    return null
  }

  contacts[index] = { ...contacts[index], ...data }
  fs.writeFile(contactsPath, JSON.stringify(contacts))

  return contacts[index]
}

module.exports = updateContactById
