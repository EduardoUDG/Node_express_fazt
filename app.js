const express   = require('express');
const morgan    = require('morgan');
const app       = express();
require('dotenv').config();
const port      = process.env.PORT;


app.use(express.json());
app.use(morgan('dev'));

// app.all('/user', (req, res, next) => {
    //     console.log('Por aqui paso')
    //     next();
    // });
    
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
    
    
    
    app.listen( port, (req,res) => {
        console.log(`Servidor corriendo en puerto ${port}`)
    });
    
    
//? Por esto ejecutamos los middlewares 
//? antes de las rutas
    
// function logger(req, res, next){
//     console.log(`Route received: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
//     next();
// }

// app.use(logger);