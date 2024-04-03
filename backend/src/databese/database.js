const { Sequelize } = require("sequelize");

//Base de datos con ORM
const sequelize = new Sequelize('FEU','postgres','familia',{
   localhost:'localhost',
   dialect:'postgres'
});

module.exports = sequelize;


/*const {Client} = require('pg');

 const client = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"familia",
    database:"FEU"
 })

 client.connect();*/
 
 