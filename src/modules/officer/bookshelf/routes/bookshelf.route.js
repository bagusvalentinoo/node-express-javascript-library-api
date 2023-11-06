const express = require('express')
const router = express.Router()
const ApiKey = require('../../../../middlewares/api_key.middleware')
const Auth = require('../../../../middlewares/auth.middleware')
const { isOfficer } = require('../../../../middlewares/role.middleware')
const BookshelfController = require('../controllers/bookshelf.controller')

router.get('/', ApiKey, Auth, isOfficer, async (req, res) => {
  await BookshelfController.index(req, res)
})

router.post('/', ApiKey, Auth, isOfficer, async (req, res) => {
  await BookshelfController.create(req, res)
})

router.get('/:param', ApiKey, Auth, isOfficer, async (req, res) => {
  await BookshelfController.show(req, res)
})

router.put('/:param', ApiKey, Auth, isOfficer, async (req, res) => {
  await BookshelfController.update(req, res)
})

router.delete('/', ApiKey, Auth, isOfficer, async (req, res) => {
  await BookshelfController.destroy(req, res)
})

module.exports = router