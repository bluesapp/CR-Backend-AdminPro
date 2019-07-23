const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} NO ES UN ROL PERMITIDO'
}

const usuarioSchema = new Schema({
    nombre: { type: String, required: [true, 'El campo nombre es necesario'] },
    apellido: { type: String, required: [true, 'El campo nombre es necesario'] },
    email: { type: String, unique: true, required: [true, 'El campo correo es necesario'] },
    password: { type: String, required: [true, 'El campo password es necesario'] },
    img: { type: String, required: false },
    rol: { type: String, required: true, default: "USER_ROLE", enum: rolesValidos }
});

usuarioSchema.plugin( uniqueValidator, { message: '{PATH} ya existe en la DB'});

module.exports = mongoose.model('Usuario', usuarioSchema);