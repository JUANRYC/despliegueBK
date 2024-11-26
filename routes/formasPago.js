// Ruta Formas de Pago
const express = require('express');
const router = express.Router();
const formaPagoController = require('../controllers/formaPagoController');   


router.post('/', formaPagoController.crearFormaPago);
router.get('/', formaPagoController.obtenerFormasPago);
router.get('/:id', formaPagoController.obtenerFormaPagoPorId);
router.put('/:id', formaPagoController.actualizarFormaPago);
router.delete('/:id', formaPagoController.eliminarFormaPago);

module.exports = router;