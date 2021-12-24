import { getCustomRepository } from "typeorm";
import { Cidade } from "../../../../../infrastructure/database/entities/Cidade";
import { CidadesRepository } from "../../../../../infrastructure/database/repositories/CidadesRepository";

export class AlreadyExistsService {
    async execute(nome : string) : Promise<Cidade | void> {        
        const repository  = getCustomRepository(CidadesRepository);
        
        const cidade = await repository.findOne({nome});

        return cidade;
    }
}
 