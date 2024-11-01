const express = require("express"); // Importamos el módulo Express para usar sus funcionalidades
const routes = require("./routes/server"); // Importamos las rutas definidas en el archivo 'pages.js'

const app = express(); // Creamos una instancia de Express, que representa la aplicación
const PORT = 3001; // Definimos el puerto en el que el servidor escuchará

app.use(express.static('public')); // Configura Express para servir archivos estáticos desde la carpeta 'public'

// Usamos las rutas definidas en 'routes'
app.use('/', routes);

// Iniciamos el servidor en el puerto especificado y muestra un mensaje en la consola
app.listen(PORT, () => {
    console.log(`Servidor en escucha desde http://localhost:${PORT}`);
});