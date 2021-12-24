import { getCustomRepository } from "typeorm";
import { Localidade } from "../../../../../../infrastructure/database/entities/Localidade";
import { LocalidadesRepository } from "../../../../../../infrastructure/database/repositories/LocalidadesRepository";
import { ILocalidade } from "../../dto/localidade.dto";

export  class CriarLocalidadeService {
    async execute({nome, categoria, endereco, cidade} : ILocalidade) : Promise<Localidade | any> {
        const repository = getCustomRepository(LocalidadesRepository);     
        
        const localidade = repository.create({nome,categoria,endereco,cidade});

        await repository.save(localidade);
        
        return localidade;
    }
}
