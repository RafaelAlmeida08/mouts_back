import { Router } from 'express';
import { ensureExistsCidade } from '../../cidades/middlewares/ensureExistsCidade';
import { ensureFields } from '../middlewares/ensureFields';
import CriarLocalidadeController from '../useCases/criar/CriarLocalidadeController';
import { ListarLocalidadesController } from '../useCases/listar/ListarLocalidadesController';

const localidadesRoutes = Router();

localidadesRoutes.post('', ensureFields, ensureExistsCidade, new CriarLocalidadeController().handle);
localidadesRoutes.get('', new ListarLocalidadesController().handle);

export { localidadesRoutes }