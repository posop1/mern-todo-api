/* eslint-disable import/extensions */
import exrepess from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import console from 'console';

import todoRouter from './routes/todo.route.js';

dotenv.config();

const { PORT } = process.env;
const { DB_URL } = process.env;
const app = exrepess();

const connectDataBase = async () => {
  try {
    mongoose.connect(DB_URL);
    console.log('Connecting to DataBase');
  } catch (error) {
    console.log(error);
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('mongoDB disconnected');
});
mongoose.connection.on('connected', () => {
  console.log('mongoDB connected');
});

// modlewares
app.use(exrepess.json());
app.use(cors());

// routes
app.use('/api/todo', todoRouter);

async function startApp() {
  try {
    app.listen(PORT, () => {
      console.log(`Server listening ${PORT}`);
      connectDataBase();
    });
  } catch (error) {
    console.log(error);
  }
}

startApp();
