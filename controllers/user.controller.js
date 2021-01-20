const mongoose = require('mongoose')
const moment = require('moment')
const db = require('../models')
const Day = db.day

exports.loadBoard = (req, res) => {

    Day.find({date: {$gte: new Date(parseInt(req.query.firstDate)), $lte: new Date()}}, function (err, days) {
        res.render('home', {days: days})
    })
}