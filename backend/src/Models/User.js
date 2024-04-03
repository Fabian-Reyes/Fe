const {DataTypes } = require("sequelize");
const sequelize  = require('../databese/database.js');

const User = sequelize.define('User', {
 id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
 },
 nombre: DataTypes.STRING(100),
 apellido: DataTypes.STRING(100),
 ocupacion: DataTypes.STRING, // Asumiendo que ocupacion es un tipo de dato simple como string
 carnet_identidad: DataTypes.STRING(50),
 email: DataTypes.STRING(50),
 password: DataTypes.STRING(100),
},{
    tableName: 'usuarios',
    underscored: true,
    timestamps:false
});

module.exports = User;
