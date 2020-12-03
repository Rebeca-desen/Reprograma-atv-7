 const plantas = require('../models/plantas.json')


 const getAll = (req, res) => {
     console.log(req.body)
     res.status(200).send(plantas)
 }

 const getById = (req, res) => {
     const id = req.params.id
     
    const plantasId =  plantas.find((planta) => planta.id == id)
if(!plantasId){
  return  res.status(500).send('planta não achada')
}
return res.status(200).send(plantasId)
 }

 module.exports = {
     getAll,
     getById
 }