import express from 'express';

import userRoutes from './user';
import blogRoutes from './blog';
import fileRoutes from './file';
import propertyRoutes from './properties';

const routes = express.Router();

routes.use(userRoutes, blogRoutes, fileRoutes, propertyRoutes);

export default routes;
