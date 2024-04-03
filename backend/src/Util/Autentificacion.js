const bcrypt = require('bcryptjs');


class ServicioContrasenna{

    static rondas_salt = 10 ;

    //Este metodo se usa para encriptar la contrasenna
    //1. Primero genera un salt que es como las vueltas de encriptacion 
    //2.Segundo encripta la contrasena con ese salt
    static async encriptar(contrasenna){
        //Esto genera la salt a partir de esa cantidad de rondas definidas
        const salt = await bcrypt.genSalt(ServicioContrasenna.rondas_salt);
        return await bcrypt.hash(contrasenna,salt); 
    }
    static comprobar(contrasenna, hashedContrasenna){

    }
}

module.exports = ServicioContrasenna;