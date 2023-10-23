const express = require('express')
const router = express.Router()
const ApiKey = require('../../../../middlewares/api_key.middleware')
const Auth = require('../../../../middlewares/auth.middleware')
const { isOfficer } = require('../../../../middlewares/role.middleware')
const MemberController = require('../controllers/member.controller')

router.get('/', [ApiKey, Auth, isOfficer], async (req, res) => {
  await MemberController.index(req, res)
})

router.post('/', [ApiKey, Auth, isOfficer], async (req, res) => {
  await MemberController.store(req, res)
})

router.get('/:param', [ApiKey, Auth, isOfficer], async (req, res) => {
  await MemberController.show(req, res)
})

router.delete('/', [ApiKey, Auth, isOfficer], async (req, res) => {
  await MemberController.destroy(req, res)
})

module.exports = router