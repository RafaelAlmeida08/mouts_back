import { EntityRepository, Repository } from 'typeorm';
import { Tipo } from '../entities/Tipo';

@EntityRepository(Tipo)
class CategoriasRepository extends Repository<Tipo> {}

export { CategoriasRepository }