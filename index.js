const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const fileUpload = require('express-fileupload');

const port = 3000;

app.use(express.json())
app.use(cors())
app.use(fileUpload({
    createParentPath: true
}))
app.use('/api', require('./src/routes'))
app.use(express.static('imagens'))

mongoose.connect('mongodb://root:rootpwd@localhost:27017/guardaroupa?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

app.listen(port)




