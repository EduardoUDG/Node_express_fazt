const express   = require('express');
const morgan    = require('morgan');
const app       = express();
require('dotenv').config();
const port      = process.env.PORT;

app.use(express.json());
// app.use(morgan('dev'));

//? Otro middleware
//? Se encarga de mandar archivos al Frontend
//? tales como HTML, CSS y JS
//? son archivos estaticos 
//? La carpeta PUBLIC siempre buscara archivos index
app.use(express.static('public'));



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

//? Este middleware tiene que pasar por todas las ritas    
//? Colocamos el nombre de la carpeta


app.listen( port, (req,res) => {
    console.log(`Servidor corriendo en puerto ${port}`)
});
    
