const express = require('express');
const router = express.Router();
const controller = require("../controllers/user.controller")

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('home', { title: 'Express' });
  controller.loadBoard(req, res)
});

module.exports = router;
