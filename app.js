// Requires
const express = require('express');
const mongoose = require('mongoose');


// Inicializar varibles
const app = express();


// Conexion a la DB
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err;

    console.log('Base de datos funcionando');
    
})

// Rutas
app.get('/', (req, res, next) => {

    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    })

})

// Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server en puerto 3000 online');

})