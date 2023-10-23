const express = require('express')
const router = express.Router()
const ApiKey = require('../../../../middlewares/api_key.middleware')
const Auth = require('../../../../middlewares/auth.middleware')
const Upload = require('../../../../middlewares/firebase_storage.middleware')
const ProfileController = require('../controllers/profile.controller')

router.put('/', [ApiKey, Auth, Upload('user/member', 'avatar')], async (req, res) => {
  await ProfileController.update(req, res)
})

module.exports = router