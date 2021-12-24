import { Column, Entity, JoinColumn, ManyToOne,OneToMany,PrimaryColumn, Timestamp } from "typeorm";
import { v4 as uuid} from 'uuid';
import { Cidade } from "./Cidade";
import { Categoria } from "./Categoria";
import { Nota } from "./Nota";

@Entity("localidades")
export class Localidade {

    @PrimaryColumn()
    id: string;

    @Column({type: "varchar", length: 100})
    nome: string;

    @Column({type: "varchar", length: 255})
    endereco: string;

    @OneToMany(() => Nota, nota => nota.localidade)
    notas: Nota[];

    @ManyToOne(() => Categoria, { eager: true, onDelete: "CASCADE" })
    @JoinColumn({name: "categoria"})
    categoria: Categoria;

    @ManyToOne(() => Cidade, { eager: true })
    @JoinColumn({name: 'cidade'})
    cidade: Cidade;
    
    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    created_at: Timestamp;

    constructor() {
        if(!this.id) this.id = uuid();
    }

}
