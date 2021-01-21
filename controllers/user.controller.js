const mongoose = require('mongoose')
const moment = require('moment')
const db = require('../models')
const Day = db.day
const Email = db.email

exports.loadBoard = (req, res) => {

    if (req.query.firstDate) {
        Day.find({date: {$gte: new Date(parseInt(req.query.firstDate)), $lte: new Date()}}, function (err, days) {
            Email.find(function (err, emails) {
                res.render('home', {days: days, emails: emails})
            })
        }).sort({'date': 1})
    } else {
        Day.find(function (err, days) {
            Email.find(function (err, emails) {
                res.render('home', {days: days, emails: emails})
            })
        }).sort({'date': 1})
    }
}

exports.addMail = (req, res) => {
     const email = new Email({
         "email": req.body.email
     })

     email.save(function (err){
         res.redirect('/')
     })
}

exports.remmoveMail = (req, res) => {

    Email.deleteOne({'_id': mongoose.Types.ObjectId(req.query.emailID)}, function (err) {
        if (err) return console.log(err)
        res.redirect('/')
    });

}

exports.getData = (req, res) => {

    console.log("req.query.firstDate")
    console.log(req.query)
    console.log(req.query.firstDate)
    console.log(new Date(parseInt(req.query.firstDate)))

    Day.find({date: {$gte: new Date(parseInt(req.query.firstDate)), $lte: new Date()}}, function (err, days) {
        res.json(days)
    }).sort({'date': 1})

}