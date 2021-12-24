import { Router } from 'express';
import { cidadesRoutes } from '../app/modules/client/cidades/routes';
import { localidadesRoutes } from '../app/modules/client/localidades/routes';

const routes = Router();

routes.use('/cidades', cidadesRoutes);
routes.use('/localidades', localidadesRoutes);

export { routes } 