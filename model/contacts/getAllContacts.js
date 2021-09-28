// const fs = require('fs/promises')
// const path = require('path')

// const contactsPath = path.join(__dirname, '..', 'contacts.json')

// Get all contacts
const getAllContacts = async () => {
  const { Contacts } = require('../../db/collections')
  // const data = await fs.readFile(contactsPath)
  // const contacts = JSON.parse(data)

  // return contacts

  const contacts = await Contacts.find({}).toArray()
  console.log(contacts)
  return contacts
}

module.exports = getAllContacts
