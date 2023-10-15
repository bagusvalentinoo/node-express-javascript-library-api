const express = require('express')
const router = express.Router()
const ApiKey = require('../../../../middlewares/api_key.middleware')
const Auth = require('../../../../middlewares/auth.middleware')
const { isOfficer } = require('../../../../middlewares/role.middleware')
const upload = require('../../../../middlewares/firebase_storage.middleware')
const BookController = require('../controllers/book.controller')

router.get('/', [ApiKey, Auth, isOfficer], async (req, res) => {
  await BookController.index(req, res)
})

router.post('/', [ApiKey, Auth, isOfficer, upload('book', 'cover')], async (req, res) => {
  await BookController.store(req, res)
})

router.get('/:param', [ApiKey, Auth, isOfficer], async (req, res) => {
  await BookController.show(req, res)
})

router.put('/:param', [ApiKey, Auth, isOfficer, upload('book', 'cover')], async (req, res) => {
  await BookController.update(req, res)
})

router.delete('/', [ApiKey, Auth, isOfficer], async (req, res) => {
  await BookController.destroy(req, res)
})

module.exports = router