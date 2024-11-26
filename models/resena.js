// resena
const mongoose = require('mongoose');

const resenaSchema = new mongoose.Schema({
  id_usuario:   { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  id_producto:  { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
  calificacion: { type: Number, required: true, min: 1, max: 5 },
  comentario:   { type: String },
  fecha:        { type: Date, default: Date.now }
});

resenaSchema.index({ id_usuario: 1 });
resenaSchema.index({ id_producto: 1 });

const Resena = mongoose.model('Resena', resenaSchema);

module.exports = Resena;