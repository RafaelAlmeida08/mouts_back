import { Router } from 'express';
import { ensureExistsLocalidade } from '../../localidades/middlewares/ensureExistsLocalidade';
import { ensureFields } from '../middlewares/ensureFields';
import { CriarNotaController } from '../useCases/criar/CriarNotaController';


const notasRoutes = Router();

notasRoutes.post('', ensureFields, ensureExistsLocalidade, new CriarNotaController().handle);


export { notasRoutes }