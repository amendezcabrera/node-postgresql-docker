const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')

// Constants
const PORT = 8080
const HOST = '0.0.0.0'

// App
const app = express()

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

