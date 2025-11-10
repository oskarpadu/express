import express, { Router } from 'express';
import { todoController }  from '../controllers/todos.js';

const router = Router();

router.post('/todos', (req, res) => todoController.createTodo(req, res));
router.get('/todos', (req, res) => todoController.getTodos(req, res));
router.patch('/:id', (req, res) => todoController.uptadeTodo(req, res));

export default router;