const express   = require('express');
const app       = express();
require('dotenv').config();
const port      = process.env.PORT;


app.get('/', (req,res) => {
    res.send('Hola mundo');
});

app.get('/about', (req,res) => {
    res.send('Soy about');
});

app.get('/contact', (req,res) => {
    res.send('Form contact');
});

app.get('/test', (req,res) => {
    res.send('<h1>TEST</h1>');
});



app.listen( port, (req,res) => {
    console.log(`Servidor corriendo en puerto ${port}`)
});
