const { response } = require("express");
const { subirArchivo } = require("../helpers");
const { existeArchivo } = require("../middlewares");
const {User, Producto} = require('../models')
const cargarArchivo = async(req,res = response) => {

    try {
        
        const nombre = await subirArchivo(req.files, undefined , 'imgs') // pónemos el undefined puesto que por oganizacion debe haber un segundo lugar obligatoriio
        res.json({
            nombre
        })

    } catch (error) {
        res.status(400).json({
            msg : error
        })
    }

}

const actualizarImagen = async(req, res = response) => {

    const {coleccion, id} = req.params

    let modelo

    switch (coleccion) {
        case 'users':
            modelo = await User.findById(id)
            if(!modelo){
                res.status(400).json({
                    msg: 'No existe un usuario con el id: ' + id 
                })
            }
            break;
        case 'productos':
            modelo = await Producto.findById(id)
            if(!modelo){
                res.status(400).json({
                    msg: 'No existe un producto con el id: ' + id 
                })
            }
            break;
    
        default:
                return res.status(500).json('Olvide revisar esta condición')
        
    }
   
        const nombre = await subirArchivo(req.files, undefined , coleccion) 
        modelo.img = nombre
    
        await modelo.save()
    
        res.json({
            modelo
        })
        

        res.status(400).json({
            msg : 'no estas subiendo archivo'
        })
    
}

module.exports = {
    cargarArchivo,
    actualizarImagen
}