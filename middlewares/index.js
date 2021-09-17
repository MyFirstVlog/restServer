
//ctes que tienen todo lo que exportan los imports
const  validarCampos  = require('../middlewares/validar-campos')
const  validarJWT  = require('../middlewares/validar-jwt')
const  validaRoles  = require('../middlewares/validar-roles')
//aqui es importante puesto que si no pongo el ... tocaria exportar metodo a metodo, es como si en elxports juntara todos los metodos
module.exports = {
    ...validarCampos,
    ...validarJWT,
    ...validaRoles
}