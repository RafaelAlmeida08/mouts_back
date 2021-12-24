import { Localidade } from "../../../../../infrastructure/database/entities/Localidade";

export interface INota {
    descricao: string,
    localidade: Localidade
}