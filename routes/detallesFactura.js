// Ruta Detalle Factura
const express = require('express');
const router = express.Router();
const detalleFacturaController = require('../controllers/detalleFacturaController');

router.post('/', detalleFacturaController.crearDetalleFactura);
router.get('/', detalleFacturaController.obtenerDetallesFactura);
router.get('/:id', detalleFacturaController.obtenerDetalleFacturaPorId);
router.put('/:id', detalleFacturaController.actualizarDetalleFactura);
router.delete('/:id', detalleFacturaController.eliminarDetalleFactura);

module.exports = router;