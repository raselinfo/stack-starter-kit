import { Router } from 'express';
import demoRoute from './demo/demo.routes';

export interface RoutesType {
  route: Router;
}
const routes = [
  {
    route: demoRoute,
  },
];

export default routes;
