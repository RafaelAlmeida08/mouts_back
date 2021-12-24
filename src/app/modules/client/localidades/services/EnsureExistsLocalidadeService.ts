import { getCustomRepository } from "typeorm";
import { Localidade } from "../../../../../infrastructure/database/entities/Localidade";
import { LocalidadesRepository } from "../../../../../infrastructure/database/repositories/LocalidadesRepository";

export class EnsureExistsLocalidadeService { 
    async execute(id: string) : Promise<Localidade | void> {      

        const repository = getCustomRepository(LocalidadesRepository);

        const localidade = await repository.findOne(id)
        
        return localidade;
    }
}
