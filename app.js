const express   = require('express');
const morgan    = require('morgan');
const app       = express();
require('dotenv').config();
const port      = process.env.PORT;

//? Configuraciones de express
//? Puerto | Motor de plantillas | Nombre de aplicacion
//? Necesitaremos el método set()
//TODO set( NombreDeVariable, valorDeVariable );
//TODO miramos la escucha del puerto console.log
app.set('appName', 'Eduardo Express Tutorial');
app.set('view engine', 'ejs');



//* Middewares
app.use(express.json());
// app.use(morgan('dev'));



//* Routes
//TODO render() busca dentro del directorio views 
//TODO el primer index que encuentre
app.get('/', (req,res) => {
    const data = [{name:'Juan'}, {name:'Hector'}, {name:'Casco'}];
    res.render('index.ejs', { people: data});
});


app.get('/user', (req,res) => {
    res.json({
        msg: `GET - usuarios`,
    });
});

app.post('/user', (req,res) => {
    const { ...data } = req.body;
    res.json({
        msg: `POST - usuario creado`,
        data
    });
});

app.put('/user/:id', (req,res) => {
    const id = req.params.id;
    res.json({
        msg: `PUT - usuario ${id} actualizado`,
        id
    });
});

app.delete('/user/:id', (req,res) => {
    const id = req.params.id;
    res.json({
        msg: `DELETE - Usuario ${parametros} eliminado`,
        id
    });
});

//* Public
app.use(express.static('public'));


app.listen( port, (req,res) => {
    console.log( app.get('appName') );
    console.log(`Servidor corriendo en puerto ${port}`)
});
    
