// usuario
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre:       { type: String, required: true, maxlength: 100 },
  apellido:     { type: String, required: true, maxlength: 100 },
  email:        { type: String, required: true, maxlength: 100, unique: true },
  contrasena:   { type: String, required: true, maxlength: 100 },
  direccion:    { type: String, required: true, maxlength: 255 },
  telefono:     { type: String, required: true, maxlength: 20 },
  fecha_registro: { type: Date, default: Date.now },
  rol:           {type: String, enum: ['Usuario', 'Administrador'], default: 'Usuario'},
  nivel_acceso:  {type: String, enum: ['Basico', 'Premium', 'Super'], default: 'Basico'}
});

usuarioSchema.index({ email: 1 });

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;