import { getCustomRepository } from "typeorm";
import { Localidade } from "../../../../../../infrastructure/database/entities/Localidade";
import { LocalidadesRepository } from "../../../../../../infrastructure/database/repositories/LocalidadesRepository";
import { ILocalidade } from "../../dto/localidade.dto";

export class AtualizarLocalidadeService { 
    async execute({nome, endereco, categoria, cidade} : ILocalidade, id: string) : Promise<Localidade> {        
        const repository = getCustomRepository(LocalidadesRepository);

        const localidade = await repository.findOne(id);

        let novaLocalidade = repository.create({
            id: id, 
            nome, 
            endereco, 
            categoria, 
            cidade
        });

        return await repository.save({
            ...localidade,
            ...novaLocalidade
        });
    }
}
