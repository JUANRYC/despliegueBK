// detalle_factura
const mongoose = require('mongoose');

const detalleFacturaSchema = new mongoose.Schema({
  id_factura:   { type: mongoose.Schema.Types.ObjectId, ref: 'Factura', required: true },
  id_producto:  { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
  cantidad:     { type: Number, required: true, min: 1 },
  subtotal:     { type: Number, required: true, min: 0 }
});

detalleFacturaSchema.index({ id_factura: 1 });
detalleFacturaSchema.index({ id_producto: 1 });

const DetalleFactura = mongoose.model('DetalleFactura', detalleFacturaSchema);

module.exports = DetalleFactura;