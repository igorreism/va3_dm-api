const express = require('express');
const RoupaController = require('./controllers/RoupaController');
const ContatoController = require('./controllers/ContatoController');
const routes = express.Router();

// Listagem e criacao de novas roupas
routes.get('/roupas', RoupaController.list)
routes.post('/roupas', RoupaController.create)
// Cadastro de contatos
routes.post('/contato', ContatoController.create)

module.exports = routes