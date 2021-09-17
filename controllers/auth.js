const {response} = require('express')
const bcryptjs = require('bcryptjs')
const User = require('../models/user')
const { generarJWT } = require('../helpers/generar-jwt')

const login = async(req,res =response )=>{

    const {correo, password} = req.body

    try {
        
        //Verificar si el email existe
        const usuario = await User.findOne({correo})
        if(!usuario){
            return res.status(400).json({
                msg: "Usuario/Password no son correctos"
            })
        }
        //verificar si user es activo
        if(!usuario.estado){
            return res.status(400).json({
                msg: "Usuario/Password no son correctos -estado = false"
            })
        }

        //verificar la contarsela
        const validPassword = bcryptjs.compareSync(password, usuario.password)
        if(!validPassword){
            return res.status(400).json({
                msg: "Usuario/Password no son correctos - contraseña = incorrecta"
            })
        }
        //generar el jwt
        const token = await generarJWT(usuario.id) // como en generar tengo el return ya puede poner aqui el await. originalmente jsonwebtoken no tranaja devolveiendo una promesa
                                                    // en su implementacion se la generamos
        res.json({
            usuario,
            token
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg:'hable con el admin'
        })
    }

}

module.exports = {
    login,
}