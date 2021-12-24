import { getCustomRepository } from "typeorm";
import { Cidade } from "../../../../../../infrastructure/database/entities/Cidade";
import { CidadesRepository } from "../../../../../../infrastructure/database/repositories/CidadesRepository";

export default class ListarCidadesService {    
    async execute() : Promise<Cidade[]> {
        const repository = getCustomRepository(CidadesRepository);     
        
        const list = await repository.find();
        
        return list;
    }
}
