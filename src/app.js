const express = require ('express')
const db = require ('./utils/database')
require ('dotenv').config()
const initModels = require('./models/initModels');

const usersRoutes = require('./routes/users.routes')
const todosRoutes = require('./routes/todos.routers')


const cors = require('cors')


initModels()

const PORT = process.env.PORT || 8000

 db.sync()
     .then(() => console.log('Base de datos sincronizada'))
     .catch(err => console.log(err))

const app = express()

app.use(express.json(), cors())

app.get('/', (req,res) =>{
    res.send('servidor ok')
})

app.use(usersRoutes)
app.use(todosRoutes)



app.listen (PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
