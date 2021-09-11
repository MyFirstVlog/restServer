const Role = require('../models/role')
const User = require('../models/user')

const esRoleValido = async(rol='') => {
    const existeRol = await Role.findOne({rol})
    if(!existeRol){
        throw new Error(`El rol: ${rol} no esta definido en la base de datos`)
    }
}

const emailExiste = async (correo = '') =>{
    const busquedaEmail = await User.findOne({correo})
    if(busquedaEmail){
        throw new Error('El correo ya esta registrado en la base de datos')
    }
    
}
const existeUsuarioPorID = async (id = '') =>{
    const busquedaUsuario = await User.findById(id)
    if(!busquedaUsuario){
        throw new Error('El usuario que deseas actualizar no se encuentra en la base de datos')
    }
    
}


module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorID
}