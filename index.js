const express = require('express');

const app = express();

app.set('port', 3000);

app.get('/', (req, res) => {
    res.send('Hola Mundo!!!');
});

app.listen(app.get('port'), () => {
    console.log(`Escuchando en el puerto ${app.get('port')}.`);
});