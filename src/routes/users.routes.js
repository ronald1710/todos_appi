const { Router } = require('express')
const { createNewUser } = require('../controllers/users.controllers')

const router = Router()

router.post('/users', createNewUser)

module.exports = router;