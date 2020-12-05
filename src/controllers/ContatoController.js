const Contato = require('../models/Contato');

module.exports = {

    async create(req, res){
        const dados = req.body
        const cadastro = await Contato.create(dados)
        res.json(cadastro)
    }
}