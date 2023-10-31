const express = require('express')
const router = express.Router()
const ApiKey = require('../../../../middlewares/api_key.middleware')
const Auth = require('../../../../middlewares/auth.middleware')
const upload = require('../../../../middlewares/firebase_storage.middleware')
const { isOfficer } = require('../../../../middlewares/role.middleware')
const GenreController = require('../controllers/genre.controller')

router.get('/', ApiKey, Auth, isOfficer, async (req, res) => {
  await GenreController.index(req, res)
})

router.post('/', ApiKey, Auth, isOfficer, upload('genre', 'icon'), async (req, res) => {
  await GenreController.store(req, res)
})

router.get('/:param', ApiKey, Auth, isOfficer, async (req, res) => {
  await GenreController.show(req, res)
})

router.put('/:param', ApiKey, Auth, isOfficer, upload('genre', 'icon'), async (req, res) => {
  await GenreController.update(req, res)
})

router.delete('/', ApiKey, Auth, isOfficer, async (req, res) => {
  await GenreController.destroy(req, res)
})

module.exports = router