const { Router } = require ('express')
const { createNewTodo, getTodosByUserCategory, updateStatusCompleted, deleteTodos } = require('../controllers/todos.controllers')

const router = Router()

router.post('/todo', createNewTodo)
router.get('/todos/user/:id', getTodosByUserCategory)
router.put('/todo/:userId', updateStatusCompleted)
router.delete('/todo/:id', deleteTodos)

module.exports = router;