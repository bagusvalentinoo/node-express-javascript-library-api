const express = require('express')
const router = express.Router()
const loginRoute = require('../../modules/login/routes/login.route')
const registerRoute = require('../../modules/register/routes/register.route')

router.use('/auth', loginRoute)
router.use('/auth', registerRoute)

module.exports = router