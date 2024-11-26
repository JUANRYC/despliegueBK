// producto Controller
const Producto = require("../models/producto");
const Marca = require("../models/marca"); // Para verificar si la marca existe
const Categoria = require("../models/categoria"); // Para verificar si la categoria existe

exports.crearProducto = async (req, res) => {
  try {
    const { id_marca, id_categoria } = req.body;
    const marca = await Marca.findById(id_marca);
    if (!marca) {
      return res.status(404).json({ mensaje: "Marca no encontrada" });
    }
    const categoria = await Categoria.findById(id_categoria);
    if (!categoria) {
      return res.status(404).json({ mensaje: "Categoría no encontrada" });
    }

    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.obtenerProductoPorId = async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    res.json(producto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.actualizarProducto = async (req, res) => {
  try {
    const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!producto) {
      return res.status(404).json({
        mensaje: "Producto no encontrado",
      });
    }
    res.json(producto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.eliminarProducto = async (req, res) => {
  try {
    const producto = await Producto.findByIdAndDelete(req.params.id);
    if (!producto) {
      return res.status(404).json({
        mensaje: "Producto no encontrado",
      });
    }
    res.json({ mensaje: "Producto eliminado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
