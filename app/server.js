'use strict'

const {Pool, Client} = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'pgdb',
    database: 'node_tutorial_db',
    password: ''
})

const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')

// Constants
const PORT = 8080
const HOST = '0.0.0.0'

// App
const app = express()

pool.query('SELECT * FROM users AS my_first_query', (err, res) => {
    console.log(err, res)
    pool.end()
})

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}))

app.set('view engine', '.hbs')

app.set('views', path.join(__dirname, 'views'))

app.get('/', (request, response) => {
    response.render('body', {
        name: 'Alberto'
    })
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)

