const express = require("express"); // Importa Express
const path = require("path"); // Importa Path para manejar rutas de archivos
const app = express(); // Crea una instancia de Express
const port = 3000; // Define el puerto en el que se ejecutará el servidor
const routes = require("./routes/server"); // Importa las rutas desde server.js

app.use(express.static(path.join(__dirname, 'public'))); // Configura Express para servir archivos estáticos desde la carpeta 'public'

app.use("/", routes); // Usa las rutas definidas en server.js

app.listen(port, () => {
    console.log(`Servidor en escucha desde http://localhost:${port}`);
});