const {archivo: {leerArchivo, escribirArchivo}} = require('./../utils')

const validarCampos = ({id, titulo, descripcion}) => {
    return !(!id || !titulo || !descripcion) ? true : false;
}

const validarID = (id) => {
    const todos = leerArchivo();
    const valido = todos.some(todo => id === todo.id);

    return valido;
}

const crear = ({id, titulo, descripcion}) => {
    const nuevoTodo = {
        id,
        titulo,
        descripcion
    }

    const todos = leerArchivo();
    const listaTodos = [...todos, nuevoTodo];
    escribirArchivo(listaTodos);
    
    return;
}

const buscarTodos = () => {
    return leerArchivo();
}

const buscarUno = (id) => {
    const todos = leerArchivo();
    const todo = todos.find(todo => id === todo.id);

    return todo;
}

const actualizar = (todoViejo, nuevosCuerpo) => {
    const todos = leerArchivo();
    const nuevaListaTodos = todos.map(todo => {
        if (todo.id === todoViejo.id ) {
             return {...todoViejo, ...nuevosCuerpo}   
        }

        return todo;
    });

    escribirArchivo(nuevaListaTodos);
    return;
}

const eliminar = (id) => {
    const todos = leerArchivo();
    const resultado = todos.filter(todo => todo.id !== id);

    escribirArchivo(resultado);
    return;
}

module.exports = {
    validarCampos,
    validarID,
    crear,
    buscarTodos,
    buscarUno,
    actualizar,
    eliminar
};