import { Cidade } from "../../../../../infrastructure/database/entities/Cidade";
import { Categoria } from "../../../../../infrastructure/database/entities/Categoria";

export interface ILocalidade {
    nome: string,
    endereco: string,     
    categoria: Categoria, 
    cidade: Cidade,   
}
