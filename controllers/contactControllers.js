const Contact = require("../models/model.js")


const getContacts = async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts)
}

const getContact = async (req, res) => {
    res.status(200).json({"message":`Contact Details for id ${req.params.id}`})
}


const createContact = async (req, res) => {
    const {name, phone, email} = req.body
    const contact = await Contact.create({
        name,
        phone,
        email
    })
    res.status(201).json(contact)
}

const updateContact = async (req, res) => {
    res.status(200).json({"message":`Contact updated for id ${req.params.id}`})
}

const deleteContact = async (req, res) => {
    res.status(200).json({"message":`Contact deleted for id ${req.params.id}`})
}


module.exports = {getContacts, getContact, createContact, updateContact, deleteContact}