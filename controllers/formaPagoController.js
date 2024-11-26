// formaPago Controller
const FormaPago = require('../models/formaPago');


exports.crearFormaPago = async (req, res) => {
    try {
      const nuevoFormaPago = new FormaPago(req.body);
      await nuevoFormaPago.save();
      res.status(201).json(nuevoFormaPago);
    } catch 
   (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  exports.obtenerFormasPago = async (req, res) => {
    try {
      const formasPago = await FormaPago.find();
      res.json(formasPago);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.obtenerFormaPagoPorId = async (req, res) => {
    try {
      const formapago = await FormaPago.findById(req.params.id);
      if (!formapago) {
        return res.status(404).json({ mensaje: 'Forma Pago no encontrada' });
      }
      res.json(formapago);
    } catch 
   (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.actualizarFormaPago = async (req, res) => {
    try {
      const formapago = await FormaPago.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!formapago) {
        return res.status(404).json({ 
          mensaje: 'Forma Pago no encontrada' });
      }
      res.json(formapago);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  exports.eliminarFormaPago = async (req, res) => {
    try {
      const formapago = await FormaPago.findByIdAndDelete(req.params.id);
      if (!formapago) {
        return res.status(404).json({
   mensaje: 'Forma Pago no encontrada' });
      }
      res.json({ mensaje: 'Forma Pago eliminada' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };