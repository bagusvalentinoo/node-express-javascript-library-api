const express = require('express')
const router = express.Router()
const ApiKey = require('../../../../../middlewares/api_key.middleware')
const ProvinceController = require('../controllers/province.controller')

router.get('/', ApiKey, async (req, res) => {
  await ProvinceController.index(req, res)
})

router.get('/:param', ApiKey, async (req, res) => {
  await ProvinceController.show(req, res)
})

module.exports = router