import { Router } from 'express';
import { CriarNotaController } from '../useCases/criar/CriarNotaController';


const notasRoutes = Router();

notasRoutes.post('', new CriarNotaController().handle);


export { notasRoutes }