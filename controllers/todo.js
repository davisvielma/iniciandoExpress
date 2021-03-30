const { todo: { 
        validarCampos, 
        validarID, 
        crear, 
        buscarTodos, 
        buscarUno, 
        actualizar, 
        eliminar } } = require('../services');
        
const crearTodo = (req, res) => {
    let respuestaServicio = {
        informacion: {
            status: 201,
            mensaje: "Todo creado correctamente"
        },
        data: {
            todo: []
        }
    };

    const camposLLenos = validarCampos(req.body);

    if (!camposLLenos) {
        respuestaServicio.informacion.status = 400;
        respuestaServicio.informacion.mensaje = "Todos los campos son obligatorios";

        return res.status(400).json(respuestaServicio);
    }

    crear(req.body);

    return res.status(201).json(respuestaServicio);
}

const verTodos = (req, res) => {
    let respuestaServicio = {
        informacion: {
            status: 200,
            mensaje: "Lista de todos"
        },
        data: {
            todo: []
        }
    };   

    respuestaServicio.data.todo = buscarTodos();

    return res.status(200).json(respuestaServicio);
}

const verTodo = (req, res) => {
    let respuestaServicio = {
        informacion: {
            status: 200,
            mensaje: "Todo encontrado"
        },
        data: {
            todo: []
        }
    };

    const { id } = req.params;

    if (!validarID(id)) {
        respuestaServicio.informacion.status = 404;
        respuestaServicio.informacion.mensaje = "ID no existe";

        return res.status(404).json(respuestaServicio);
    }

    const todo = buscarUno(id);
    respuestaServicio.data.todo = todo;

    res.status(200).json(respuestaServicio);
}

const actualizarTodo = (req, res) => {
    let respuestaServicio = {
        informacion: {
            status: 200,
            mensaje: "Todo actualizado"
        },
        data: {
            todo: []
        }
    };

    const { id } = req.params;

    if (!validarID(id)) {
        respuestaServicio.informacion.status = 404;
        respuestaServicio.informacion.mensaje = "ID no existe";

        return res.status(404).json(respuestaServicio);
    }

    const todo = buscarUno(id);
    actualizar(todo, req.body);

    return res.status(200).json(respuestaServicio);
}

const EliminandoTodo = (req, res) => {
    let respuestaServicio = {
        informacion: {
            status: 200,
            mensaje: "Todo eliminado"
        },
        data: {
            todo: []
        }
    };

    const { id } = req.params;

    if (!validarID(id)) {
        respuestaServicio.informacion.status = 404;
        respuestaServicio.informacion.mensaje = "ID no existe";

        return res.status(404).json(respuestaServicio);
    }

    eliminar(id);

    return res.status(200).json(respuestaServicio);
}

module.exports = {
    crearTodo,
    verTodos,
    verTodo,
    actualizarTodo,
    EliminandoTodo
};