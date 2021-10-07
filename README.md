# WebServer de Cafeteria

Este es un completo proyecto acádemico donde realice una simulacion del back-end de una cafeteria donde use diferentes tecnologias como Node Js, jwt, google sign in, uso de base de datos no relacional Mongo DB para la persistencia de datos, a su vez implemente mediante 'Cloudinary' la capacidad de almacenar las imagenes y gracias a la api key que esta proporciona usarla para grabar su URL en la base de datos  y asi poderla visualizar cuando sea solicitada, ya sea con postman o mediante el front-end.

La api, esta dividida en 5 ejes principales: categoria del producto, Productos, Usuarios, Buscador, Uploads(imagenes).

Se uso JWT con el fin de tener una autenticación de sesión del usuario para que este tenga la potestad de : crear, modificar, actualizar o borrar información del servidor y
que sus cambios se vean reflejados en la base de datos que esta desplega en mongo atlas  y usada internamente con Mongo Compass. Finalmente, use los servicios de desarrollo
de google para poder autenticar al uuario mediante otra estrategia diferente.

En postman implemente las pruebas de dicha aplicacion y explico como usar cada request, verificar siguiente link de la documentacion: https://documenter.getpostman.com/view/17573387/UUxtDqN6

Recordar que en GitHub no estan las variables de entorno que tienes las claves de las api's por buenas practicas se omite este archivo, si se solicitan aqui les dejo mi correo y con mucho gusto facilitare --> alejandro.estradam@udae.edu.co

Recuerda que cuando lo clones se debe hacer ``` npm install ``` para descargar todos los node modules necesario para la implementacion del codigo
