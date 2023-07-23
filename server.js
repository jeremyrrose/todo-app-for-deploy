// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const views = require('express-react-views')

// CONFIGURATION
require('dotenv').config()
const app = express()

// MIDDLEWARE
// use react-express-views for rendering
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', views.createEngine())

// allow Express to receive data from an HTML form as req.body
app.use(express.urlencoded({extended: true}))

// allow Express to treat POST requests as PUT, DELETE, etc.
app.use(methodOverride('_method'))

// CONTROLLERS
const todosController = require('./controllers/todo_controller')
app.use('/todos', todosController)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}.`)
})