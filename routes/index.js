const express = require('express');
const router = express.Router();
const controller = require("../controllers/user.controller")

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('home', { title: 'Express' });
  controller.loadBoard(req, res)
});

router.delete('/manageEmail', function (req, res, next) {
  controller.remmoveMail(req, res)
})


router.post('/manageEmail', function (req, res, next) {
  controller.addMail(req, res)
})

router.get('/timeFilter', function (req, res) {
  controller.getData(req, res)
})

module.exports = router;
