// categoria
const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
  nombre:           { type: String, required: true, maxlength: 100 },
  descripcion:      { type: String },
  fecha_creacion:   { type: Date, default: Date.now }
});

const Categoria = mongoose.model('Categoria', categoriaSchema);

module.exports = Categoria;