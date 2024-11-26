// categoria Controller
const Categoria = require('../models/categoria');


exports.crearCategoria = async (req, res) => {
    try {
      const nuevoCategoria = new Categoria(req.body);
      await nuevoCategoria.save();
      res.status(201).json(nuevoCategoria);
    } catch 
   (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  exports.obtenerCategorias = async (req, res) => {
    try {
      const categorias = await Categoria.find();
      res.json(categorias);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.obtenerCategoriaPorId = async (req, res) => {
    try {
      const categoria = await Categoria.findById(req.params.id);
      if (!categoria) {
        return res.status(404).json({ mensaje: 'Categoria no encontrada' });
      }
      res.json(categoria);
    } catch 
   (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.actualizarCategoria = async (req, res) => {
    try {
      const categoria = await Categoria.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!categoria) {
        return res.status(404).json({ 
          mensaje: 'Categoria no encontrada' });
      }
      res.json(categoria);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  exports.eliminarCategoria = async (req, res) => {
    try {
      const categoria = await Categoria.findByIdAndDelete(req.params.id);
      if (!categoria) {
        return res.status(404).json({
   mensaje: 'Categoria no encontrada' });
      }
      res.json({ mensaje: 'Categoria eliminada' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };