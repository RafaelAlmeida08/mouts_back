import { Router } from 'express';
import { ListarCategoriasController } from '../useCases/listar/ListarCategoriasController';

const categoriasRoutes = Router();

categoriasRoutes.get('', new ListarCategoriasController().handle);

export { categoriasRoutes } 
