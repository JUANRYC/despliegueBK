// Ruta Administrador
const express = require('express');
const router = express.Router();
const administradorController = require('../controllers/administradorController');   


router.post('/', administradorController.crearAdministrador); 
router.get('/', administradorController.obtenerAdministradores);
router.get('/:id', administradorController.obtenerAdministradorPorId);
router.put('/:id', administradorController.actualizarAdministrador);
router.delete('/:id', administradorController.eliminarAdministrador);

module.exports = router;