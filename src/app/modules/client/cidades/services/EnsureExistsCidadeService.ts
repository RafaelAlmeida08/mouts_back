import { getCustomRepository } from "typeorm";
import { Cidade } from "../../../../../infrastructure/database/entities/Cidade";
import { CidadesRepository } from "../../../../../infrastructure/database/repositories/CidadesRepository";

export class EnsureExistsCidadeService { 
    async execute(id: string) : Promise<Cidade | void> {      

        const repository = getCustomRepository(CidadesRepository);

        const cidade = await repository.findOne(id)
        
        return cidade;
    }
}
