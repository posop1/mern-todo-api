/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
import Todo from '../models/Todo.js';

class TodoController {
  async create(req, res) {
    try {
      const { title, body } = req.body;
      const newTodo = new Todo({
        title,
        body,
      });

      await newTodo.save();

      res.status(200).json(newTodo);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAll(req, res) {
    try {
      const todos = await Todo.find().sort('-createdAt');

      if (!todos) {
        return res.json({
          message: 'Задачи отсутствуют.',
        });
      }

      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async update(req, res) {
    try {
      const todoId = req.params.id;

      await Todo.updateOne(
        {
          _id: todoId,
        },
        {
          title: req.body.title,
          body: req.body.body,
          completed: req.body.completed,
        },
      );

      res.status(200).json({
        success: true,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async delete(req, res) {
    try {
      const todo = await Todo.findByIdAndDelete(req.params.id);
      if (!todo) {
        return res.json({
          message: 'Такая задача отсутствует.',
        });
      }

      res.status(200).json({
        message: 'Задача была удалена.',
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new TodoController();
