// usuario Controller
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt'); // Para hashear contraseñas

exports.crearUsuario = async (req, res) => {
  try {
    const { contrasena } = req.body;
    const saltRounds = 10;
    const hashedContrasena = await bcrypt.hash(contrasena, saltRounds);
    req.body.contrasena = hashedContrasena;

    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.status(201).json(nuevoUsuario);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.obtenerUsuarioPorId = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.json(usuario);
  } catch 
 (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.actualizarUsuario = async (req, res) => {
  try {
    if (req.body.contrasena) {
      const saltRounds = 10;
      const hashedContrasena = await bcrypt.hash(req.body.contrasena, saltRounds);
      req.body.contrasena = hashedContrasena;
    }

    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.json(usuario);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.eliminarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuario) {
      return res.status(404).json({
 mensaje: 'Usuario no encontrado' });
    }
    res.json({ mensaje: 'Usuario eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};