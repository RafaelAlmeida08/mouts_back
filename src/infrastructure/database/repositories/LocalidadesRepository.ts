import { EntityRepository, Repository } from 'typeorm';
import { Localidade } from '../entities/Localidade';

@EntityRepository(Localidade)
class LocalidadesRepository extends Repository<Localidade> {}

export { LocalidadesRepository }