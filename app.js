const express = require('express');
const app = express();
const path = require('path');

// Middleware para entender datos de formularios y JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Servir archivos estáticos (HTML, CSS, JS del cliente)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta básica para el Admin (Ejemplo de lo que hablábamos)
app.get('/admin', (req, res) => {
    res.send('<h1>Panel de Administración - Inicie Sesión</h1>');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
