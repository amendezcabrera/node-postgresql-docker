'use strict'

const pg = require('pg')
const conString = 'postgres://postgres:@pgdb/node_tutorial_db'

const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')

// Constants
const PORT = 8080
const HOST = '0.0.0.0'

// App
const app = express()

/*pg.connect(conString, function(err, client, done){
    if(err){
        return console.error('error fetching client from pool', err)
    }
    client.query('SELECT $1::varchar AS my_first_query', ['node_tutorial_db'], function(err, result){
        done()
        if(err){
            return console.error('error happened during query', err)
        }
        console.log(result.rows[0])
        process.exit(0)
    })
})  */

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

