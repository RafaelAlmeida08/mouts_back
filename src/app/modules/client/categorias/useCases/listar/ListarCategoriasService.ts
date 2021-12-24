import { getCustomRepository } from "typeorm";
import { Tipo } from "../../../../../../infrastructure/database/entities/Tipo";
import { CategoriasRepository } from "../../../../../../infrastructure/database/repositories/CategoriasRepository";

export class ListarCategoriasService {
    async execute() : Promise<Tipo[]> {
        const repository = getCustomRepository(CategoriasRepository);

        const list = await repository.find();

        return list;
    }
}
