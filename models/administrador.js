// administrador
const mongoose = require('mongoose');

const administradorSchema = new mongoose.Schema({
  id_usuario:       { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  fecha_creacion:   { type: Date, default: Date.now },
  nivel_acceso:     { type: String, enum: ['Basico', 'Premiun', 'Super'], required: true , default: 'Basico'}
});

administradorSchema.index({ id_usuario: 1 });

const Administrador = mongoose.model('Administrador', administradorSchema);

module.exports = Administrador;