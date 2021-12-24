import { getCustomRepository } from "typeorm";
import { Nota } from "../../../../../../infrastructure/database/entities/Nota";
import { NotasRepository } from "../../../../../../infrastructure/database/repositories/NotasRepository";
import { INota } from "../../dto/nota.dto";

export class CriarNotaService {
    async execute({descricao, localidade} : INota) : Promise<Nota> {        
        const repository = getCustomRepository(NotasRepository);

        const nota = repository.create({descricao, localidade});

        await repository.save(nota);

        return nota;
    }
}
