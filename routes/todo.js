const {Router} = require('express');
const router = Router();

const { todo: {
    verTodos, 
    verTodo, 
    actualizarTodo, 
    crearTodo, 
    EliminandoTodo} } = require('../controllers');

router.get('/', verTodos);
router.get('/:id', verTodo);
router.post('/',crearTodo);
router.put('/:id', actualizarTodo);
router.delete('/:id', EliminandoTodo);

module.exports = router;