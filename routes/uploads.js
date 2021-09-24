const {Router} = require('express')
const {check} = require('express-validator')
const { cargarArchivo, actualizarImagen } = require('../controllers/uploads')
const { coleccionesPermitidas } = require('../helpers')
const { existeArchivo } = require('../middlewares')
const { validarCampos } = require('../middlewares/validar-campos')


const router = Router()

router.post('/',existeArchivo, cargarArchivo)

router.put('/:coleccion/:id', [
    existeArchivo,
    check('id', 'el id debe ser un mongo id').isMongoId(),
    check('coleccion').custom(c => coleccionesPermitidas(c, ['users', 'productos'])),
    validarCampos
] , actualizarImagen)
module.exports = router