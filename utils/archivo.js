const fs = require('fs');

const leerArchivo = () => {
    const listaTodos = fs.readFileSync('todo.json', 'utf-8');
    return JSON.parse(listaTodos);
}

const escribirArchivo = (arreglo) => {
    const todos = JSON.stringify(arreglo);
    fs.writeFileSync('todo.json', todos, 'utf-8');
}

module.exports = {
    leerArchivo,
    escribirArchivo
};