//Dependencias
const express = require('express');
//importar modulos
const usuarios = require('./Router/UserRouter.js');
//Variables Globales
const {Puerto} = require('../util/Global'); 

//crear app
const app = express();
app.use(express.json());
//
const User = require('./Models/User.js');
app.use(usuarios);

//Iniciar el servidor
app.listen(Puerto,() =>{
    console.log(User.findAll());
    console.log('El app se ha conectado al puerto ' + Puerto);
}) 