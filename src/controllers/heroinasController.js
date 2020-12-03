const heroinas = require('../models/heroinas.json')

const getAll = (req, res) => {
    console.log(req.body)
    
    res.status(200).send(heroinas)
}

const getById = (req, res) => {
    const id = req.params.id

    const heroinasFound = heroinas.find((heroina) => heroina.id == id)

    if(!heroinasFound) {
        return res.status(500).send('heroína não encontrada')
    }
    return res.status(200).send(heroinasFound)
}


module.exports = {
    getAll,
    getById
}