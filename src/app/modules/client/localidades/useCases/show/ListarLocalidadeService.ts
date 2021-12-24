import { getCustomRepository } from "typeorm";
import { Localidade } from "../../../../../../infrastructure/database/entities/Localidade";
import { LocalidadesRepository } from "../../../../../../infrastructure/database/repositories/LocalidadesRepository";

export class ListarLocalidadeService {
    async execute(id: string): Promise<Localidade | any>{
        const repository = getCustomRepository(LocalidadesRepository);

        const local = await repository.findOne({
            relations: ['notas'],
            where: {
                id: id
            }
        });

        return local;
    }
}