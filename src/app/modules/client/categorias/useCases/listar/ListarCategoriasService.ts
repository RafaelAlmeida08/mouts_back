import { getCustomRepository } from "typeorm";
import { Categoria } from "../../../../../../infrastructure/database/entities/Categoria";
import { CategoriasRepository } from "../../../../../../infrastructure/database/repositories/CategoriasRepository";

export class ListarCategoriasService {
    async execute() : Promise<Categoria[]> {
        const repository = getCustomRepository(CategoriasRepository);

        const list = await repository.find();

        return list;
    }
}
