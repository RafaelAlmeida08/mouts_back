import { Router } from 'express';
import CriarLocalidadeController from '../useCases/criar/CriarLocalidadeController';
import { ListarLocalidadesController } from '../useCases/listar/ListarLocalidadesController';

const localidadesRoutes = Router();

localidadesRoutes.post('', new CriarLocalidadeController().handle);
localidadesRoutes.get('', new ListarLocalidadesController().handle);

export { localidadesRoutes }