// detalle Factura Controller
const DetalleFactura = require('../models/detalleFactura');


exports.crearDetalleFactura = async (req, res) => {
    try {
      const nuevoDetalleFactura = new DetalleFactura(req.body);
      await nuevoDetalleFactura.save();
      res.status(201).json(nuevoDetalleFactura);
    } catch 
   (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  exports.obtenerDetallesFactura = async (req, res) => {
    try {
      const detallesfactura = await DetalleFactura.find();
      res.json(detallesfactura);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.obtenerDetalleFacturaPorId = async (req, res) => {
    try {
      const detallefactura = await DetalleFactura.findById(req.params.id);
      if (!detallefactura) {
        return res.status(404).json({ mensaje: 'Detalle Factura no encontrado' });
      }
      res.json(detallefactura);
    } catch 
   (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.actualizarDetalleFactura = async (req, res) => {
    try {
      const detallefactura = await DetalleFactura.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!detallefactura) {
        return res.status(404).json({ 
          mensaje: 'Detalle Factura no encontrado' });
      }
      res.json(detallefactura);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  exports.eliminarDetalleFactura = async (req, res) => {
    try {
      const detallefactura = await DetalleFactura.findByIdAndDelete(req.params.id);
      if (!detallefactura) {
        return res.status(404).json({
   mensaje: 'Detalle Factura no encontrado' });
      }
      res.json({ mensaje: 'Detalle Factura eliminado' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };