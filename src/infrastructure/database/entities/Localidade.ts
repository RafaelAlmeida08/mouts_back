import { Column, Entity, JoinColumn, ManyToOne,PrimaryColumn, Timestamp } from "typeorm";
import { v4 as uuid} from 'uuid';
import { Cidade } from "./Cidade";
import { Tipo } from "./Tipo";

@Entity("localidades")
export class Localidade {

    @PrimaryColumn()
    id: string;

    @Column({type: "varchar", length: 100})
    nome: string;

    @Column({type: "varchar", length: 255})
    endereco: string;

    @ManyToOne(() => Tipo, { eager: true, onDelete: "CASCADE" })
    @JoinColumn({name: "localidade_tipo"})
    tipo: Tipo;

    @ManyToOne(() => Cidade, { eager: true })
    @JoinColumn({name: 'cidade'})
    cidade: Cidade;
    
    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    created_at: Timestamp;

    constructor() {
        if(!this.id) this.id = uuid();
    }

}
