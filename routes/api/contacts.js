const express = require('express')
const router = express.Router()

router.get('/api/contacts', async (req, res, next) => {
  res.json({ message: 'getAllContacts' })
})

router.get('/api/contacts/:contactId', async (req, res, next) => {
  res.json({ message: 'getContactById' })
})

router.post('/api/contacts', async (req, res, next) => {
  res.json({ message: 'addContact' })
})

router.delete('/api/contacts/:contactId', async (req, res, next) => {
  res.json({ message: 'removeContact' })
})

router.patch('/api/contacts/:contactId', async (req, res, next) => {
  res.json({ message: 'updateContact' })
})

module.exports = router
