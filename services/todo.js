const {archivo: {leerArchivo, escribirArchivo}} = require('./../utils')

const validarCampos = ({titulo, descripcion}) => {
    return !(!titulo || !descripcion) ? true : false;
}

const validarID = (id) => {
    const todos = leerArchivo();
    const valido = todos.some(todo => id === todo.id);

    return valido;
}

const crear = ({titulo, descripcion}) => {
    const todos = leerArchivo();
    let ultimoId = todos[todos.length - 1].id;
    ultimoId = (++ultimoId).toString();

    const nuevoTodo = {
        id: ultimoId,
        titulo,
        descripcion
    }

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

const actualizar = (todoViejo, {titulo, descripcion}) => {
    const todos = leerArchivo();

    const camposActualizados = {};
    if (titulo) camposActualizados.titulo = titulo;
    if (descripcion) camposActualizados.descripcion = descripcion;

    const nuevaListaTodos = todos.map(todo => {
        if (todo.id === todoViejo.id ) {
             return {...todoViejo, ...camposActualizados};   
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