const express = require('express')
const router = express.Router()
const GenreController = require('../controllers/genre.controller')
const ApiKey = require('../../../../middlewares/api_key.middleware')

router.get('/', ApiKey, async (req, res) => {
  await GenreController.index(req, res)
})

router.get('/:param', ApiKey, async (req, res) => {
  await GenreController.show(req, res)
})

module.exports = router