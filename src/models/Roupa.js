const mongoose = require('mongoose')
const GuardaroupaSchema = new mongoose.Schema({

    nome: {
        type: 'string'
    },
    descricao: {
        type: 'string'
    },
    imagem: {
        type: 'string'
    }
    
})

const Roupa = mongoose.model('Roupa', GuardaroupaSchema)

module.exports = Roupa