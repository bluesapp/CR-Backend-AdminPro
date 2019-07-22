const express = require('express');
const app = express();

const Usuario = require('../models/usuario')

// Obtener todos los usuarios
app.get('/', (req, res, next) => {

    Usuario.find({}, 'nombre apellido correo img rol')
        .exec(
            (err, usuarios) => {
                if (err) {
                    return res, status(500).json({
                        ok: 'false',
                        mensaje: 'Error cargando usuarios',
                        errors: err
                    });
                }

                res.status(200).json({
                    ok: true,
                    usuarios: usuarios
                });
            });

});

// Crear nuevo usuario

app.post('/', (req, res) => {
    let body = req.body;
    res.status(200).json({
        ok: true,
        body: body
    });

})


module.exports = app;
