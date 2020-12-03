const express = require('express')
const app = express()

const index = require('./src/routes/index')
const plantas = require('./src/routes/plantasRoute')

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requeste-With, Content-Type, Accept'
    )
    next()
})


app.use('/', index)
app.use('/plantas', plantas)


module.exports = app