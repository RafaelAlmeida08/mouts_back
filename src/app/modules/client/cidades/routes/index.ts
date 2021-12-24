import { Router } from 'express';
import CriarCidadeController from '../useCases/criar/CriarCidadeController';
import ListarCidadesController from '../useCases/listar/ListarCidadesController';
import { alreadyExists } from '../middlewares/AlreadyExists';
import { ensureFields } from '../middlewares/EnsureFields';

const cidadesRoutes = Router();

cidadesRoutes.post('', ensureFields, alreadyExists, new CriarCidadeController().handle);
cidadesRoutes.get('', new ListarCidadesController().handle)

export { cidadesRoutes }