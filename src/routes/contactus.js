const express = require("express");
const contactus = require("../controllers/contactus.js")
const contact = require("../controllers/contact.js")
const scontact = require("../controllers/scontact.js")

const router = express.Router()

router.get('/', contactus)
router.post('/contact', contact)
router.post('/scontact', scontact)

module.exports = router;