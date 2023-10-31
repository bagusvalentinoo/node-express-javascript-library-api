const express = require('express')
const router = express.Router()
const ApiKey = require('../../../../middlewares/api_key.middleware')
const BookController = require('../controllers/book.controller')

router.get('/', ApiKey, async (req, res) => {
  await BookController.index(req, res)
})

router.get('/:param',  ApiKey, async (req, res) => {
  await BookController.show(req, res)
})

module.exports = router