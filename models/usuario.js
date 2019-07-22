const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: { type: String, required: [true, 'El campo nombre es necesario'] },
    apellido: { type: String, required: [true, 'El campo nombre es necesario'] },
    email: { type: String, unique: true, required: [true, 'El campo correo es necesario'] },
    password: { type: String, required: [true, 'El campo password es necesario'] },
    img: { type: String, required: false },
    rol: { type: String, required: true, default: "user_rol" }
});

module.exports = mongoose.model('Usuario', usuarioSchema);