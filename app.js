const express   = require('express');
const app       = express();
require('dotenv').config();
const port      = process.env.PORT;


app.get('/', (req,res) => {
    res.send('Hola mundo');
});


app.listen( port, (req,res) => {
    console.log(`Servidor corriendo en puerto ${port}`)
});
