// producto
const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre:           { type: String, required: true, maxlength: 100 },
  descripcion:      { type: String },
  id_marca:         { type: mongoose.Schema.Types.ObjectId, ref: 'Marca', required: true },
  id_categoria:     { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria', required: true },
  precio:           { type: Number, required: true, min: 0 },
  stock:            { type: Number, required: true, min: 0 },
  fecha_creacion:   { type: Date, default: Date.now },
  imagen_url:       { type: String, maxlength: 255 }
});

productoSchema.index({ id_marca: 1 });
productoSchema.index({ id_categoria: 1 });

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;