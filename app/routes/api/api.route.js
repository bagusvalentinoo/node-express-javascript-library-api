const express = require('express')
const router = express.Router()
const loginRoute = require('../../modules/login/routes/login.route')

router.use('/auth', loginRoute)

module.exports = router