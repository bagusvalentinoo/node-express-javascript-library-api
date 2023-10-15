const express = require('express')
const router = express.Router()
const loginRoute = require('../../modules/login/routes/login.route')
const registerRoute = require('../../modules/register/routes/register.route')
const officerGenreRoute = require('../../modules/officer/genre/routes/genre.route')
const officerBookRoute = require('../../modules/officer/book/routes/book.route')

router.use('/auth', loginRoute)
router.use('/auth', registerRoute)
router.use('/officer/genres', officerGenreRoute)
router.use('/officer/books', officerBookRoute)

module.exports = router