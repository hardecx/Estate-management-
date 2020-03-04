import express from 'express';

import userRoutes from './user';
import blogRoutes from './blog';
import fileRoutes from './file';

const routes = express.Router();

routes.use(userRoutes, blogRoutes, fileRoutes);

export default routes;
