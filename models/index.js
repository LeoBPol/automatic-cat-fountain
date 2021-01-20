const mongoose = require("mongoose");

const db = {};

db.day = require('./day');
db.email = require('./email');

module.exports = db;