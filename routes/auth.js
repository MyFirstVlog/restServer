const {Router} = require('express')
const {check} = require('express-validator')
const { login, googleSignIn } = require('../controllers/auth')
const { validarCampos } = require('../middlewares/validar-campos')

const router = Router()

router.post('/login',[
    check('correo', 'el correo es oblogatorio').isEmail(),
    check('password', 'la contraseña es obligatoria').not().isEmpty(),
    validarCampos
] , login)

router.post('/google',[
    check('id_token', 'id Token de google es necesario').not().isEmpty(),
    validarCampos
] , googleSignIn)

module.exports = router