const express = require('express')
const cors = require('cors')
class Server {

    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usersRoutes = '/api/users'

        //Middlewares funcion que siempre se ejecuta cuando levantemos el servidor
        this.middlewares()
        //Rutas de mi app
        this.routes()
    }

    middlewares(){ //Middlewares funcion que siempre se ejecuta cuando levantemos el servidor
        
        //Lectura y parseo del body
        this.app.use(express.json())

        //cors
        this.app.use(cors())
        
        //Directorio publico
        this.app.use(express.static('public'))

    }

    routes(){
        this.app.use(this.usersRoutes, require('../routes/user'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`App listening at http://localhost:${this.port}`)
          })
    }
}

module.exports = Server