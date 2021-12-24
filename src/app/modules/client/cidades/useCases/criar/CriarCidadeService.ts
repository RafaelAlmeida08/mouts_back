import { getCustomRepository } from "typeorm";
import { Cidade } from "../../../../../../infrastructure/database/entities/Cidade";
import { CidadesRepository } from "../../../../../../infrastructure/database/repositories/CidadesRepository";
import { ICidade } from "../../dto/cidade.dto";

export default class CriarCidadeService {
    async execute({nome, estado, pais} : ICidade) : Promise<Cidade> {
        const repository = getCustomRepository(CidadesRepository);

        const cidade = repository.create({nome, estado, pais});

        await repository.save(cidade);       

        return cidade;
    }
}
