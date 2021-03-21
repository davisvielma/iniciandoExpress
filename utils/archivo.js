const fs = require('fs');

const archivo = {}

archivo.leerArchivo = () => {
    const listaTodos = fs.readFileSync('todo.json', 'utf-8');
    return JSON.parse(listaTodos);
}

archivo.escribirArchivo = (arreglo) => {
    const todos = JSON.stringify(arreglo);
    fs.writeFileSync('todo.json', todos, 'utf-8');
}

module.exports = archivo;