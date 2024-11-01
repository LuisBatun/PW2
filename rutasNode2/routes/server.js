const express = require("express");
const path = require("path");
const router = express.Router();

// Redirige la raíz a la pagina principal
router.get('/', (req, res) => {
    res.redirect('/menuprincipal');
});

// Menu principal
router.get('/menuprincipal', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public','index.html'));
});

// Calculadora
router.get('/calculadora', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'calculadora.html'));
});

// Generador codigo QR
router.get('/generadorQR', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'generadorQR.html'));
});

module.exports = router;