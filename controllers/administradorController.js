// administrador Controller
const Administrador = require('../models/administrador');
const Usuario = require('../models/usuario'); // Para verificar si el usuario existe

exports.crearAdministrador = async (req, res) => {
  try {
    const { id_usuario } = req.body;
    const usuario = await Usuario.findById(id_usuario);
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    const nuevoAdministrador = new Administrador(req.body);
    await nuevoAdministrador.save();
    res.status(201).json(nuevoAdministrador);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
  };
  
  exports.obtenerAdministradores = async (req, res) => {
    try {
      const administradores = await Administrador.find();
      res.json(administradores);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.obtenerAdministradorPorId = async (req, res) => {
    try {
      const administrador = await Administrador.findById(req.params.id);
      if (!administrador) {
        return res.status(404).json({ mensaje: 'Administrador no encontrado' });
      }
      res.json(administrador);
    } catch 
   (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.actualizarAdministrador = async (req, res) => {
    try {
      const administrador = await Administrador.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!administrador) {
        return res.status(404).json({ 
          mensaje: 'Administrador no encontrado' });
      }
      res.json(administrador);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  exports.eliminarAdministrador = async (req, res) => {
    try {
      const administrador = await Usuario.findByIdAndDelete(req.params.id);
      if (!administrador) {
        return res.status(404).json({
   mensaje: 'Administrador no encontrado' });
      }
      res.json({ mensaje: 'Administrador eliminado' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };