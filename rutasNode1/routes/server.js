const express = require('express'); // Importa Express
const path = require('path'); // Importa Path para manejar rutas de archivos
const router = express.Router(); // Crea una instancia del router

// Redirige la raíz a la página inicial
router.get('/', (req, res) => {
    res.redirect('/bienvenida');
});

// Bienvenida
router.get('/bienvenida', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html')); // Cambia la ruta
});

// ¿Quiénes somos?
router.get('/quienesSomos', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'page2.html')); // Cambia la ruta
});

// Conócenos
router.get('/conocenos', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'page3.html')); // Cambia la ruta
});

module.exports = router; // Exporta el router
