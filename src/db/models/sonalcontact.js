const mongoose = require("mongoose");

const newMessage = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    budget: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

const SMessage = new mongoose.model("SMessage", newMessage);

module.exports = SMessage;