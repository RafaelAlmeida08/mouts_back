import { getCustomRepository } from "typeorm";
import { LocalidadesRepository } from "../../../../../../infrastructure/database/repositories/LocalidadesRepository";

export class DeletarLocalidadeService { 
    async execute(id: string) : Promise<void> {
        const repository = getCustomRepository(LocalidadesRepository);
        
        await repository.delete({id});
    }
}
