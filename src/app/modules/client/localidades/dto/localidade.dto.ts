import { Cidade } from "../../../../../infrastructure/database/entities/Cidade";
import { Tipo } from "../../../../../infrastructure/database/entities/Tipo";

export interface ILocalidade {
    nome: string,
    endereco: string,     
    tipo: Tipo, 
    cidade: Cidade,   
}
