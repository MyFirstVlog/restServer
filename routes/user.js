

const {Router} = require('express')
const { usuariosGET, usuariosPUT, usuariosPOST, usuariosDELETE, usuariosPATCH } = require('../controllers/users')

const router = Router()

//aqui solo  deberia la ruta, por buenas practicas el controlador deberia estar en otro archivo
router.get('/', usuariosGET ) // no se pone () en usuariosGET porque no lo estoy ejecutando la estoy la estoy referenciando
router.put('/:id',usuariosPUT)
router.post('/', usuariosPOST)
router.delete('/', usuariosDELETE)
router.patch('/', usuariosPATCH)

module.exports = router