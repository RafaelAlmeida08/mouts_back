import { Router } from 'express';
import { cidadesRoutes } from '../app/modules/client/cidades/routes';
import { localidadesRoutes } from '../app/modules/client/localidades/routes';
import { notasRoutes } from '../app/modules/client/notas/routes';

const routes = Router();

routes.use('/cidades', cidadesRoutes);
routes.use('/localidades', localidadesRoutes);
routes.use('/notas', notasRoutes);

export { routes } 