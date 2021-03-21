const {leerArchivo, escribirArchivo} = require('./../utils/archivo');

const controlador = {}

controlador.verTodos = (req, res) => {  
    const todos = leerArchivo();

    res.json(todos);
}
controlador.verTodo = (req, res) => {
    const {id} = req.params;

    const todos = leerArchivo();
    const resultado = todos.find(todo => todo.id === id);
    
    res.json(resultado);
}

controlador.crearTodo = (req, res) => {
    const {id, titulo, descripcion} = req.body;
    
    const nuevoTodo = {
        id,
        titulo,
        descripcion
    }

    const todos = leerArchivo();
    const listaTodos = [...todos, nuevoTodo];
    
    escribirArchivo(listaTodos);
    const todos2 = leerArchivo();
    
    res.json(todos2);
}

controlador.EliminandoTodo = (req, res) => {
    const {id} = req.params;

    const todos = leerArchivo();
    const resultado = todos.filter(todo => todo.id !== id);

    escribirArchivo(resultado);
    const todos2 = leerArchivo();

    res.json(todos2);
}

controlador.actualizarTodo = (req, res) => {
    const {id} = req.params;

    const todos = leerArchivo();
    const resultado = todos.find(todo => todo.id === id);
    
    const nuevaListaTodos = todos.map(todo => {
        if(todo.id === id) {
            return {...resultado, ...(req.body)};
        }
        return todo;
    });

    escribirArchivo(nuevaListaTodos);
    const todos2 = leerArchivo();

    res.json(todos2);
}

module.exports = controlador;