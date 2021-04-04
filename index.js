const express = require('express');

const app = express();

app.set('port', 3000);

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api', require('./routes'));

app.listen(app.get('port'), () => {
    console.log(`Escuchando en el puerto ${app.get('port')}.`);
});