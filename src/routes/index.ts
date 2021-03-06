import { Router } from 'express';
import { categoriasRoutes } from '../app/modules/client/categorias/routes';
import { cidadesRoutes } from '../app/modules/client/cidades/routes';
import { localidadesRoutes } from '../app/modules/client/localidades/routes';
import { notasRoutes } from '../app/modules/client/notas/routes';

import SwaggerUi from 'swagger-ui-express';
import swaggerDocs from '../docs/swagger.json';


const routes = Router();

routes.use('/cidades', cidadesRoutes);
routes.use('/localidades', localidadesRoutes);
routes.use('/notas', notasRoutes);
routes.use('/categorias', categoriasRoutes);

routes.use('/docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDocs))

export { routes } 