import { EntityRepository, Repository } from 'typeorm';
import { Nota } from '../entities/Nota';

@EntityRepository(Nota)
class NotasRepository extends Repository<Nota> {}

export { NotasRepository }