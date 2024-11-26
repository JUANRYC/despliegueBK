// resena Controller
const Resena = require('../models/resena');


exports.crearResena = async (req, res) => {
    try {
      const nuevoResena = new Resena(req.body);
      await nuevoResena.save();
      res.status(201).json(nuevoResena);
    } catch 
   (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  exports.obtenerResenas = async (req, res) => {
    try {
      const resenas = await Resena.find();
      res.json(resenas);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.obtenerResenaPorId = async (req, res) => {
    try {
      const resena = await Resena.findById(req.params.id);
      if (!resena) {
        return res.status(404).json({ mensaje: 'Reseña no encontrada' });
      }
      res.json(resena);
    } catch 
   (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.actualizarResena = async (req, res) => {
    try {
      const resena = await Resena.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!resena) {
        return res.status(404).json({ 
          mensaje: 'Reseña no encontrada' });
      }
      res.json(resena);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  exports.eliminarResena = async (req, res) => {
    try {
      const resena = await Resena.findByIdAndDelete(req.params.id);
      if (!resena) {
        return res.status(404).json({
   mensaje: 'Reseña no encontrada' });
      }
      res.json({ mensaje: 'Reseña eliminada' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };