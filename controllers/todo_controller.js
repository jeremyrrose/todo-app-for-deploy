// DEPENDENCIES
const data = require('../models/data.js')
console.log(data)
const express = require('express')

// CONFIGURATION
const router = express.Router()

// ROUTES

// INDEX
router.get('/', (req, res)=> {
    res.render('index', {
        tasks: data.tasks,
        complete: data.complete
    })
})

module.exports = router