// Dependencies
var path = require('path'),
    express = require('express'),
    exphbs = require('express-handlebars'),
    mongo = require('mongodb').MongoClient
var routes = require('./routes.js')

// Initialization
var app = express()

// Database(s)
var dburl = 'mongodb://localhost:27017/users'

// Routes
app.use('/public', express.static(__dirname + '/public'))
app.use('/', routes)

// Configure View Engine
app.engine('.hbs', exphbs({ defaultLayout: '_template', extname: '.hbs' }))
app.set('view engine', '.hbs')

mongo.connect(dburl, (err, database) => {
    db = database
    app.listen(3000, () => {
        console.log("listening on port: 3000", "press CTRL+C to Exit")
    })
})