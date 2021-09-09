const express   = require('express');
const app       = express();
require('dotenv').config();
const port      = process.env.PORT;

//? Para que express entienda que los datos 
//? que recibe son JSON, lo tenemos que indicar
//? de la siguiente forma
app.use(express.json());

//? Pasa por antes que todas las rutas gracias al next()
app.all('/user', (req, res, next) => {
    console.log('Por aqui paso')
    next();
});

app.get('/user', (req,res) => {
    const { ...data } = req.body;

    res.json({
        msg: `GET - usuarios`,
        data
    });
});

app.post('/user', (req,res) => {
    const { ...data } = req.body;
    
    res.json({
        msg: `POST - usuario creado`,
        data
    });
});


//? Rutas dinamicas
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



app.listen( port, (req,res) => {
    console.log(`Servidor corriendo en puerto ${port}`)
});
