const express = require('express')
const router = express.Router()
const loginRoute = require('../../modules/auth/login/routes/login.route')
const registerRoute = require('../../modules/auth/register/routes/register.route')
const publicGenreRoute = require('../../modules/public/genre/routes/genre.route')
const publicBookRoute = require('../../modules/public/book/routes/book.route')
const officerGenreRoute = require('../../modules/officer/genre/routes/genre.route')
const officerBookRoute = require('../../modules/officer/book/routes/book.route')

router.use('/auth', loginRoute)
router.use('/auth', registerRoute)
router.use('/genres', publicGenreRoute)
router.use('/books', publicBookRoute)
router.use('/officer/genres', officerGenreRoute)
router.use('/officer/books', officerBookRoute)

module.exports = router