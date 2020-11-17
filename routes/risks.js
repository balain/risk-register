var express = require('express')
var router = express.Router()
const db = require('../models')

router.get('/', async function (req, res, next) {
  const risks = await db.Risk.findAll()
  console.log(risks)
  res.render('risks', { title: 'Risks', risks: risks })
})

router.get('/view', async function (req, res, next) {
  const risks = await db.Risk.findAll()
  console.log(risks)
  res.render('risks', { title: 'Risks', risks: risks })
})

router.post('/update', async function(req, res, next) {
  res.write('Update not yet implemented')
})

router.get('/edit/:id', async function (req, res, next) {
  const risk = await db.Risk.findOne({ where: { id: req.params.id } })
  try {
    if (risk) {
      res.render('risk-edit', { title: `Risk ${risk.dataValues.id}`, risk: risk.dataValues })
    } else {
      res.send(`No risk found with ID ${req.params.id}`)
    }
  } catch (err) {
    console.log(err)
    res.write(`error: ${err}`)
  }
})

router.get('/view/:id', async function (req, res, next) {
  const risk = await db.Risk.findOne({ where: { id: req.params.id } })
  try {
    if (risk) {
      res.render('risk', { title: `Risk ${risk.dataValues.id}`, risk: risk.dataValues })
    } else {
      res.send(`No risk found with ID ${req.params.id}`)
    }
  } catch (err) {
    console.log(err)
    res.write(`error: ${err}`)
  }
})

module.exports = router
