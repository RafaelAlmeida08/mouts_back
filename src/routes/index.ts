import { Router } from 'express';
import { cidadesRoutes } from '../app/modules/client/cidades/routes';

const routes = Router();

routes.use('/cidades', cidadesRoutes);

export { routes } 