import { Router } from 'express';
import { ensureExistsCidade } from '../../cidades/middlewares/ensureExistsCidade';
import { ensureExistsLocalidade } from '../middlewares/ensureExistsLocalidade';
import { ensureFields } from '../middlewares/ensureFields';
import { AtualizarLocalidadeController } from '../useCases/atualizar/AtualizarLocalidadeController';
import CriarLocalidadeController from '../useCases/criar/CriarLocalidadeController';
import { DeletarLocalidadeController } from '../useCases/deletar/DeletarLocalidadeController';
import { ListarLocalidadesController } from '../useCases/listar/ListarLocalidadesController';
import { ListarLocalidadeController } from '../useCases/show/ListarLocalidadeController';

const localidadesRoutes = Router();

localidadesRoutes.post('', ensureFields, ensureExistsCidade, new CriarLocalidadeController().handle);
localidadesRoutes.get('', new ListarLocalidadesController().handle);
localidadesRoutes.put('/:id', ensureFields, ensureExistsLocalidade, ensureExistsCidade , new AtualizarLocalidadeController().handle);
localidadesRoutes.delete('/:id', ensureExistsLocalidade, new DeletarLocalidadeController().handle);
localidadesRoutes.get('/:id', ensureExistsLocalidade, new ListarLocalidadeController().handle)

export { localidadesRoutes } 