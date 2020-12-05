const Roupa = require('../models/Roupa');

module.exports = {

    async list(req,res){
        const roupas = await Roupa.find()
        roupas.forEach(roupa =>{
            roupa.imagem = 'http://localhost:3000/' + roupa.imagem
        })
        res.json(roupas)
    },

    async create(req, res){
        const imagem = req.files.imagem
        const dados = req.body
        const newRoupa = {...dados, 'imagem': imagem.name}
        const roupaCriada = await Roupa.create(newRoupa)
        if (roupaCriada)
            imagem.mv('./imagens/'+imagem.name)
        res.json(roupaCriada)
    }
}