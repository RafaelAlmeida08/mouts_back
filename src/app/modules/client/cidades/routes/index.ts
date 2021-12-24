import { Router } from 'express';
import CriarCidadeController from '../useCases/criar/CriarCidadeController';
import ListarCidadesController from '../useCases/listar/ListarCidadesController';

const cidadesRoutes = Router();

cidadesRoutes.post('', new CriarCidadeController().handle);
cidadesRoutes.get('', new ListarCidadesController().handle)

export { cidadesRoutes }