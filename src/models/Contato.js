const mongoose = require('mongoose')
const ContatoSchema = new mongoose.Schema({

    nome: {
        type: 'string'
    },
    email: {
        type: 'string'
    },
    mensagem: {
        type: 'string'
    }
    
})

const Contato = mongoose.model('Contato', ContatoSchema)

module.exports = Contato