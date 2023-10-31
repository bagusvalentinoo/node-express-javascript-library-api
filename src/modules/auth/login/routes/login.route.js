const express = require('express')
const router = express.Router()
const ApiKey = require('../../../../middlewares/api_key.middleware')
const LoginController = require('../controllers/login.controller')

router.post('/login', ApiKey, async (req, res) => {
  await LoginController.login(req, res)
})

module.exports = router