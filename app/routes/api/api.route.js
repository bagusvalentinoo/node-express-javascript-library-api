const express = require('express')
const router = express.Router()
const loginRoute = require('../../modules/login/routes/login.route')
const registerRoute = require('../../modules/register/routes/register.route')
const officerGenreRoute = require('../../modules/officer/genre/routes/genre.route')

router.use('/auth', loginRoute)
router.use('/auth', registerRoute)
router.use('/officer/genres', officerGenreRoute)

module.exports = router