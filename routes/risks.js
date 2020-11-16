var express = require('express')
var router = express.Router()
const db = require('../models')

router.get('/', async function (req, res, next) {
  const risks = await db.Risk.findAll()
  console.log(risks)
  res.render('risks', { title: 'Risks', risks: risks })
})

router.post('/', function (req, res, next) {
  res.write('Not yet implemented')
})

module.exports = router
