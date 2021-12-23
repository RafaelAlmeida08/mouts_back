import { Router } from 'express';
import Controller from '../useCases/criar/Controller';

const cidadesRoutes = Router();

cidadesRoutes.post('', new Controller().handle)

export { cidadesRoutes }