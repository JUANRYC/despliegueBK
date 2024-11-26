// marca Controller
const Marca = require('../models/marca');

exports.crearMarca = async (req, res) => {
    try {
      const nuevoMarca = new Marca(req.body);
      await nuevoMarca.save();
      res.status(201).json(nuevoMarca);
    } catch 
   (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  exports.obtenerMarcas = async (req, res) => {
    try {
      const marcas = await Marca.find();
      res.json(marcas);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.obtenerMarcaPorId = async (req, res) => {
    try {
      const marca = await Marca.findById(req.params.id);
      if (!marca) {
        return res.status(404).json({ mensaje: 'Marca no encontrada' });
      }
      res.json(marca);
    } catch 
   (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.actualizarMarca = async (req, res) => {
    try {
      const marca = await Marca.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!marca) {
        return res.status(404).json({ 
          mensaje: 'Marca no encontrada' });
      }
      res.json(marca);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  exports.eliminarMarca = async (req, res) => {
    try {
      const marca = await Marca.findByIdAndDelete(req.params.id);
      if (!marca) {
        return res.status(404).json({
   mensaje: 'Marca no encontrada' });
      }
      res.json({ mensaje: 'Marca eliminada' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };