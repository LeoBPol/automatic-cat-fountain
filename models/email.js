const mongoose = require("mongoose");

const Email = mongoose.model(
    "Email",
    new mongoose.Schema({
        email: String
    })
);

module.exports = Email;