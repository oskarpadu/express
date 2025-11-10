import { Todo } from '../modules/todo.js';

class TodoController {
    uptadeTodo(req, res) {
        const todoId = req.params.id;
        const updatedTask = req.body.task;

        console.log(req.body);
        console.log(req.params);

        const todoIndex = this.TODOS.findIndex((todo) => todo.id === todoId);

        if (todoIndex >= 0) {
            res.json({message: 'Could not find todo!' });
            throw new Error('Could not find todo!');
        }

        this.TODOS[todoIndex] = new Todo(this.TODOS[todoIndex].id, updatedTask);
        res.json({message: 'todo is updated', updatedTask: this.TODOS[todoIndex]});

    }
}

export const todoController = new TodoController();