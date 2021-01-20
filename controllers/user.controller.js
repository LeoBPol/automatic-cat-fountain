const mongoose = require('mongoose')
const moment = require('moment')
const db = require('../models')
const Day = db.day
const Email = db.email

exports.loadBoard = (req, res) => {

    Day.find({date: {$gte: new Date(parseInt(req.query.firstDate)), $lte: new Date()}}, function (err, days) {
        Email.find(function (err, emails){
            res.render('home', {days: days, emails: emails})
        })
    })
}