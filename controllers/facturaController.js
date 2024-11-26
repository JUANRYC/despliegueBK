// factura Controller
const Factura = require('../models/factura');
const Usuario = require('../models/usuario'); // Para verificar si el usuario existe
const FormaPago = require('../models/formaPago'); // Para verificar si la forma de pago existe
const DetalleFactura = require('../models/detalleFactura'); // Para crear los detalles de la factura
const Producto = require('../models/producto'); // Para verificar si el producto existe y actualizar el stock


exports.crearFactura = async (req, res) => {
  try {
    const { id_usuario, id_forma_pago, detalles } = req.body;

    // Verificar si el usuario y la forma de pago existen
    const usuario = await Usuario.findById(id_usuario);
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    const formaPago = await FormaPago.findById(id_forma_pago);
    if (!formaPago) {
      return res.status(404).json({ mensaje: 'Forma de pago no encontrada' });
    }

    // Crear la factura
    const nuevaFactura = new Factura({ 
      id_usuario,
      id_forma_pago,
      fecha,
      total,
      direccion_envio,
      estado
    });
    await nuevaFactura.save();

    // Crear los detalles de la factura y actualizar el stock de los productos
    let total = 0;
    for (const detalle of detalles) {
      const { id_producto, cantidad } = detalle;

      // Verificar si el producto existe
      const producto = await Producto.findById(id_producto);
      if (!producto) {
        return res.status(404).json({ mensaje: `Producto con ID ${id_producto} no encontrado` });
      }

      // Verificar si hay suficiente stock
      if (producto.stock < cantidad) {
        return res.status(400).json({ mensaje: `No hay suficiente stock del producto con ID ${id_producto}` });
      }

      // Calcular el subtotal
      const subtotal = producto.precio * cantidad;
      total += subtotal;

      // Crear el detalle de la factura
      const nuevoDetalle = new DetalleFactura({
        id_factura: nuevaFactura._id,
        id_producto,
        cantidad,
        subtotal
      });
      await nuevoDetalle.save();

      // Actualizar el stock del producto
      producto.stock -= cantidad;
      await producto.save();
    }

    // Actualizar el total de la factura
    nuevaFactura.total = total;
    await nuevaFactura.save();

    res.status(201).json(nuevaFactura);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
  };
  
  exports.obtenerFacturas = async (req, res) => {
    try {
      const facturas = await Factura.find();
      res.json(facturas);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.obtenerFacturaPorId = async (req, res) => {
    try {
      const factura = await Factura.findById(req.params.id);
      if (!factura) {
        return res.status(404).json({ mensaje: 'Factura no encontrada' });
      }
      res.json(factura);
    } catch 
   (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.actualizarFactura = async (req, res) => {
    try {
      const factura = await Factura.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!factura) {
        return res.status(404).json({ 
          mensaje: 'Factura no encontrada' });
      }
      res.json(factura);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  exports.eliminarFactura = async (req, res) => {
    try {
      const factura = await Factura.findByIdAndDelete(req.params.id);
      if (!factura) {
        return res.status(404).json({
   mensaje: 'Factura no encontrada' });
      }
      res.json({ mensaje: 'Factura eliminada' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };