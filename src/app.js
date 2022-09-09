import express from 'express'
import task_routes from './routes/tasks.routes';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'))
app.use(cors());
app.use(express.json());
app.use(task_routes);

module.exports = app;