require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/perfum', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Middleware
app.use(express.json());

// Rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/administradores', require('./routes/administradores'));
app.use('/api/productos', require('./routes/productos'));
app.use('/api/categorias', require('./routes/categorias'));
app.use('/api/marcas', require('./routes/marcas'));
app.use('/api/formasPago', require('./routes/formasPago'));
app.use('/api/resenas', require('./routes/resenas'));
app.use('/api/facturas', require('./routes/facturas'));
app.use('/api/detallesFactura', require('./routes/detallesFactura'));

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`));