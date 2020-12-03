const express = require('express')
const router = express.Router()

router.get('/', function(req, res)  {
    res.status(200).send({
        title: 'Reprograma-On7 Backend - ToDo List - Semana 7- Heroinas',
        version: '1.0.0'

    }
    )
})

module.exports = router