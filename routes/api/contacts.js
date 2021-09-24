const express = require('express')
const router = express.Router()

const {
  getAllContacts,
  getContactById,
  removeContact,
  addContact,
} = require('../../model/contacts/index')

router.get('/', async (req, res, next) => {
  const contacts = await getAllContacts()
  res.status(200).json(contacts)
})

router.get('/:contactId', async (req, res, next) => {
  const contact = await getContactById()
  res.status(200).json(contact)
})

router.post('/', async (req, res, next) => {
  const newContact = await addContact()
  res.status(201).json({ message: 'Added new contact', newContact: newContact })
})

router.delete('/:contactId', async (req, res, next) => {
  // console.log(req.params.contactId)
  const id = req.params.contactId

  const result = await removeContact(id)
  if (!result) {
    // throw new Error(`Contact with id ${id} not found`)
    // console.log(`Contact with id ${id} not found`)
    res.status(404).json({ message: `Contact with id ${id} not found` })
  }
  res.status(200).json({ message: 'removeContact' })
})

router.patch('/:contactId', async (req, res, next) => {
  res.status(200).json({ message: 'updateContact' })
})

module.exports = router
