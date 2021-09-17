const jwt = require('jsonwebtoken')

//puede ser aincrono pero como trabajo en callbacks debo crear la promesa personalmente
const generarJWT = (uid = '') => { //quierp que trabaje en base a promesas 
    //el uid es lo unico que voy almacenar en el jsonwebtoken, no afecta mucho copnocer el id del usuario 
    return new Promise((resolve, reject) =>{

        const payload = {uid}

        jwt.sign(payload,process.env.SECRETORORIVATEKEY,{
            expiresIn: '4h'
        },(error, token)=>{
            if(error){
                console.log(err)
                reject('No se pudo generar el jwt')
            }else{
                resolve(token)
            }
        })

    })
}

module.exports = {
    generarJWT
}