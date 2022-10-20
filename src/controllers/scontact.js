const SContact = require('../db/models/sonalcontact')

module.exports = profile = async (req, res) => {
    try {
        const { name, email, budget, brand, message } = req.body;
        const contact = new SContact({
            name, email, budget, brand, message
        })
        await contact.save();
        res.status(200).render("contact.hbs");
    } catch (error) {
        res.status(500).send(error.message);
    }
}