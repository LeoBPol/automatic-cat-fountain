const mongoose = require("mongoose");

const Day = mongoose.model(
    "Day",
    new mongoose.Schema({
        date: Date,
        activation: Number,
        needOfWater: Number
    })
);

module.exports = Day;