import { getCustomRepository } from "typeorm";
import { Localidade } from "../../../../../../infrastructure/database/entities/Localidade";
import { LocalidadesRepository } from "../../../../../../infrastructure/database/repositories/LocalidadesRepository";

export class ListarLocalidadesService {
    async execute() : Promise<Localidade[]> {        
        const repository = getCustomRepository(LocalidadesRepository);     
        
        const list = await repository.find();
        
        return list;
    }
}
