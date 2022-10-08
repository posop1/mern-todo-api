/* eslint-disable import/extensions */
import { Router } from 'express';
import todoController from '../controllers/todo.controller.js';

const todoRouter = new Router();

todoRouter.get('/', todoController.getAll);
todoRouter.post('/', todoController.create);
todoRouter.put('/:id', todoController.update);
todoRouter.delete('/:id', todoController.delete);

export default todoRouter;
