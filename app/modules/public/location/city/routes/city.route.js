const express = require('express')
const router = express.Router()
const ApiKey = require('../../../../../middlewares/api_key.middleware')
const CityController = require('../controllers/city.controller')

router.get('/', ApiKey, async (req, res) => {
  await CityController.index(req, res)
})

router.get('/:param', ApiKey, async (req, res) => {
  await CityController.show(req, res)
})

module.exports = router