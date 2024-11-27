const express = require('express'); // Importamos Express
const mysql = require('mysql2'); // Importamos mysql2 
const bodyParser = require('body-parser'); // Importamos body-parser "Para manejar los datos de los formularios"
const path = require('path'); // Importamos path para trabajar con rutas de los archivos
const routes = require('./routes/server'); // Cargamos las rutas de la página desde un archivo externo

/* Instanciamos la aplicación */
const app = express();

/* Definimos el puerto */
const port = 1710;

// Usamos las rutas de "pages.js"
app.use('/', routes);
app.use(express.static(path.join(__dirname, 'public'))); // Servimos archivos estáticos como CSS

app.use(bodyParser.urlencoded({ extended: false })); // Para manejar datos de formularios en POST
app.set('view engine', 'ejs'); // Configuramos EJS para renderizar las vistas

// Conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'proyectofinal_pw2',
    port: '3306'
});

// Intentamos conectar a la base de datos
db.connect(err => {
    if(err){
        console.log(`Error al momento de hacer conexion con la BD`);
    } else{
        console.log(`Conexion Realizada con éxito`);
    }
});

// Iniciamos el servidor
app.listen(port,()=>{
    console.log(`El server se escucha desde http://localhost:${port}`);
});

// Mostrar mi lista usuarios
app.get('/', (req, res) => {
    // Hacemos una consulta a la base de datos para obtener todos los usuarios
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if(err){
            console.error(`Error al recuperar los datos. Código de error: ${err}`);
            res.send('Error al recuperar los datos');
        } else{
            res.render('index', {users: results}); // Mostramos los usuarios en la vista
        }
    });
});

// Agregar un usuario
app.post('/add', (req, res) => {
    const { name, email } = req.body;

    // Insertamos el nuevo usuario en la base de datos
    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(query, [name, email], (err) => {
        if (err) {
            console.error(`Error al insertar datos en la tabla de usuarios. Código de error: ${err}`);
            res.send(`Error al insertar datos en la tabla de usuarios.`);
        } else {
            res.redirect('/'); // Redirigimos al usuario a la página principal
        }
    });
});


// Mostramos el formulario de la edición de un usuario
app.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM users WHERE id = ?'; // Buscamos al usuario con el ID especificado
    db.query(query, [id], (err, results) => {
        if(err){
            console.error('Error en la BD');
            res.send("Error en la BD");
        } else{
            res.render('edit', {users: results[0]}); // Mostramos el formulario con los datos del usuario
        }
    });
});

// Editar/Actualizar un usuario
app.post('/edit/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body; 

    // Actualizamos los datos del usuario en la base de datos
    const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    db.query(query, [name, email, id], (err, results) => {
        if (err) {
            console.error('Error en la BD');
            res.send("Error en la BD");
        } else {
            res.redirect('/'); // Redirigimos a la página principal después de la actualización
        }
    });
});


// Eliminar un usuario
app.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM users WHERE id = ?'; // Eliminamos el usuario con el ID especificado
    db.query(query, [id], (err) => {
        if(err){
            console.error('Error al Eliminar');
            res.send("Error al Eliminar");
        } else {
            res.redirect('/'); // Redirigimos después de la eliminación
        }
    });
});