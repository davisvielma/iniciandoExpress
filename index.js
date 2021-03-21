const express = require('express');
const bodyParse = require('body-parser');

const app = express();

app.use(bodyParse.urlencoded({extended: false}));
app.use(bodyParse.json());

app.set('port', 3000);

app.use('/', require('./routers'));

app.listen(app.get('port'), () => {
    console.log(`Escuchando en el puerto ${app.get('port')}.`);
});