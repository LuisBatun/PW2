const express = require("express"); // Traemos Express para manejar rutas
const path = require("path"); // Traemos path para gestionar las rutas de los archivos
const router = express.Router(); // Creamos un router para las rutas

// Ruta para la página de edición
router.get('/edit', (req, res) =>{ 
    res.render(path.join(__dirname,'../views', 'edit.ejs')); // Mostramos la página de edit
});

// Ruta para la página de agregar usuario
router.get('/add', (req, res) =>{ 
    res.render(path.join(__dirname,'../views', 'add.ejs')); // Mostramos la página de add
});

// Ruta para el archivo de styles
router.get('/styles', (req, res) => { 
    res.sendFile(path.join(__dirname,'../public/css','styles.css')); // Mostramos los estilos
});

// Ruta para los estilos de add
router.get('/stylesadd', (req, res) => { 
    res.sendFile(path.join(__dirname,'../public/css','stylesadd.css')); // Mostramos los estilos de add
});

// Ruta para los estilos de edit
router.get('/stylesedit', (req, res) => { 
    res.sendFile(path.join(__dirname,'../public/css','stylesedit.css')); // Mostramos los estilos de edit
});

module.exports = router; // Exportamos las rutas para usarlas en la principal