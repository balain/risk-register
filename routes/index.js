var express = require('express')
var router = express.Router()
const db = require('../models')

/* GET home page. */
router.get('/', async function (req, res, next) {
  const risks = await db.Risk.findAll()
  console.log(risks)
  res.render('index', { title: 'Home', risks: risks })
})

module.exports = router
