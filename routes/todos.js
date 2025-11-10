import express, { Router } from 'express';
import { todoController }  from '../controllers/todos.js';

const router = Router();

router.post('/todos', (req, res) => todoController.createTodo(req, res));

export default router;