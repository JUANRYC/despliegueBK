// factura
const mongoose = require('mongoose');

const facturaSchema = new mongoose.Schema({
  id_usuario:       { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  id_forma_pago:    { type: mongoose.Schema.Types.ObjectId, ref: 'FormaPago', required: true },
  fecha:            { type: Date, default: Date.now },
  total:            { type: Number, required: true, min: 0 },
  direccion_envio:  { type: String, required: true, maxlength: 255 },
  estado:           { type: String, enum: ['Pendiente', 'Pagado', 'Enviado', 'Entregado', 'Cancelado'], required: true, default: 'Pendiente' }
});

facturaSchema.index({ id_usuario: 1 });
facturaSchema.index({ id_forma_pago: 1 });

const Factura = mongoose.model('Factura', facturaSchema);

module.exports = Factura;