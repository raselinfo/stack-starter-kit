import cors from 'cors';
import express, { Application } from 'express';
import http from 'http';
import path from 'path';
import swaggerUI from 'swagger-ui-express';
import YML from 'yamljs';

import errorMiddleware from '@middlewares/error/error.middleware';
import demoRouter from '@routes/demo/demo.routes';

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TODO: Install Cors
app.use(
  cors({
    origin: ['http://localhost:3006'],
    optionsSuccessStatus: 200,
    credentials: true,
    methods: ['GET,PUT,POST,DELETE,UPDATE,OPTIONS'],
  }),
);

// TODO: Install SwaggerUI
const swaggerDocs = YML.load(path.join(__dirname, '../docs', 'api_docs.yml'));
app.use('/api/v1/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// TODO: Check Health
app.get('/api/v1/health', (_req, res) => {
  res.status(200).json({ message: 'OK' });
});

// TODO: Combine All Routes
app.use('/api/v1', demoRouter);

// TODO: Install Global Error Handler
app.use(errorMiddleware);

// TODO: Install HTTP Server
export const server = http.createServer(app);

export default app;
