import { Router } from 'express';
import CriarLocalidadeController from '../useCases/criar/CriarLocalidadeController';

const localidadesRoutes = Router();

localidadesRoutes.post('', new CriarLocalidadeController().handle);

export { localidadesRoutes }