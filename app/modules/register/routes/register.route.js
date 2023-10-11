const express = require('express')
const router = express.Router()
const ApiKey = require('../../../middlewares/api_key.middleware')
const RegisterController = require('../controllers/register.controller')

router.post('/register', [ApiKey], async (req, res) => {
  await RegisterController.store(req, res)
})

module.exports = router