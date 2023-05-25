const { Router } = require('express')
const { createNewUser } = require('../controllers/users.controllers')

const router = Router()

router.post('/user', createNewUser)

module.exports = router;