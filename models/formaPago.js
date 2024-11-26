// forma_pago
const mongoose = require('mongoose');

const formaPagoSchema = new mongoose.Schema({
  metodo:           { type: String, required: true, maxlength: 50 },
  descripcion:      { type: String },
  fecha_creacion:   { type: Date, default: Date.now }
});

const FormaPago = mongoose.model('FormaPago', formaPagoSchema);

module.exports = FormaPago;