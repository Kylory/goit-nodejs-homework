const { Contact } = require('../../db/contactModel')

const getAllContacts = async (owner, page, limit) => {
  const options = {
    page,
    limit,
  }
  // return await Contact.find({ owner })
  return await Contact.paginate(Contact.find({ owner }), options)
}

module.exports = getAllContacts
