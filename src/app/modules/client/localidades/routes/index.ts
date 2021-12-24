import { Router } from 'express';
import { ensureExistsCidade } from '../../cidades/middlewares/ensureExistsCidade';
import { ensureExistsLocalidade } from '../middlewares/ensureExistsLocalidade';
import { ensureFields } from '../middlewares/ensureFields';
import { AtualizarLocalidadeController } from '../useCases/atualizar/AtualizarLocalidadeController';
import CriarLocalidadeController from '../useCases/criar/CriarLocalidadeController';
import { ListarLocalidadesController } from '../useCases/listar/ListarLocalidadesController';

const localidadesRoutes = Router();

localidadesRoutes.post('', ensureFields, ensureExistsCidade, new CriarLocalidadeController().handle);
localidadesRoutes.get('', new ListarLocalidadesController().handle);
localidadesRoutes.put('/:id', ensureExistsLocalidade, ensureExistsCidade ,ensureFields, new AtualizarLocalidadeController().handle);

export { localidadesRoutes } 