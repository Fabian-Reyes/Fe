const express = require('express');
const User = require('../Models/User.js')
const usuarios = express.Router();
const ServicioContrasenna = require('../Util/Autentificacion.js')

usuarios.get('/api/v1/usuarios', async (request,response) =>{
    response.json( await User.findAll());
});

usuarios.post('/api/v1/usuarios', async (request, response) =>{
    const{nombre,apellido,ocupacion,carnet_identidad,email,password} = request.body;

    if(nombre && apellido && ocupacion && carnet_identidad && email && password){
       const user = await User.create({
        nombre:nombre,
        apellido:apellido,
        ocupacion:ocupacion,
        carnet_identidad:carnet_identidad,
        email:email,
        password: await ServicioContrasenna.encriptar(password)
        })
        console.log(user);
    }else {
        console.log(response);
    }
    
})

module.exports = usuarios;