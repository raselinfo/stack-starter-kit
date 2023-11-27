import { Application } from 'express';
import { RoutesType } from '../../routes';

const combineRoutes = (app: Application, routes: RoutesType[]) => {
  routes.forEach((route) => {
    app.use('/api/v1', route.route);
  });
};

export default combineRoutes;
