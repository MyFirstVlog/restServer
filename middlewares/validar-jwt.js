const { response, request } = require('express')
const jwt = require('jsonwebtoken')

//normalmente va en los dheader en los jwt
const validarJWT = (req = request, res = response , next) => {
    const token = req.header('x-token')

    if(!token){
        return res.status(401).json({
            msg: 'No hay token en la peticion'
        })
    }
    try {
        
        const {uid} = jwt.verify(token, process.env.SECRETORORIVATEKEY)

        req.uid = uid //genero props para poderla sacar mas adelante

        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({
            msg : 'Token no valido'
        })
    }
    
}


module.exports = {
    validarJWT
}