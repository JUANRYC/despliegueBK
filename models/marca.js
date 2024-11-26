// marca
const mongoose = require('mongoose');

const marcaSchema = new mongoose.Schema({
  nombre:           { type: String, required: true, maxlength: 100 },
  descripcion:      { type: String },
  fecha_creacion:   { type: Date, default: Date.now }
});

const Marca = mongoose.model('Marca', marcaSchema);

module.exports = Marca;