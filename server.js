const express = require('express')

// Constants
const PORT = 8080
const HOST = '0.0.0.0'

// App
const app = express()

app.use((req, res, next) => {
    console.log(req.headers)
    next()
})

app.use((req, resp, next) => {
    req.chance = Math.random()
    next()
})

app.get('/', (req, res) => {
    res.json({
        chance: req.chance
    })
});

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)

