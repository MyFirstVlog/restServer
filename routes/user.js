

const {Router} = require('express')
const {check} = require('express-validator')
const { usuariosGET, usuariosPUT, usuariosPOST, usuariosDELETE, usuariosPATCH } = require('../controllers/users')
const { validarCampos } = require('../middlewares/validar-campos')
const Role = require('../models/role')

const router = Router()

//aqui solo  deberia la ruta, por buenas practicas el controlador deberia estar en otro archivo
router.get('/', usuariosGET ) // no se pone () en usuariosGET porque no lo estoy ejecutando la estoy la estoy referenciando
router.put('/:id',usuariosPUT)
//los checks son middlewares de verificacion,(recordar que tiene el next que hace pasar de middleware)
//el validorCampos, si no paso no llega si quiera a ejecutar el callback del post
router.post('/',[
    check('correo', 'el correo no es valido').isEmail(),
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    check('password', 'la contraseña es obligatoria y debe contener mas de 6 caracteres').isLength({min : 6}),
    //check('role', 'No es un rol permitido').isIn(['ADMIN_ROLE', 'USER_ROLE']), -> se debe validar sobre una lista dinamica en una db
    check('role').custom(async(rol='') => {
        const existeRol = await Role.findOne({rol})
        if(!existeRol){
            throw new Error(`El rol: ${rol} no esta definido en la base de datos`)
        }
    }),
    validarCampos

] 
, usuariosPOST)
router.delete('/', usuariosDELETE)
router.patch('/', usuariosPATCH)

module.exports = router