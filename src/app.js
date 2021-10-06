import express from 'express';
import config from 'config';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import morgan from 'morgan';
import cors from 'cors';

const specs = swaggerJsDoc(config.get('swagger.options'));

import tasksRoutes from './routes/tasks.routes';
import './database/db';

const app = express();

app.use(cors());
app.use(morgan(config.get('logger')));
app.use(express.json());

app.use(tasksRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

export default app;
