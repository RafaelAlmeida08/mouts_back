import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, Timestamp, UpdateDateColumn} from "typeorm";
import { v4 as uuid} from 'uuid';
import { Localidade } from "./Localidade";

@Entity("notas")
export class Nota {

    @PrimaryColumn()
    id: string;

    @Column({type: "varchar", length: 255})
    descricao: string;

    @ManyToOne(() => Localidade, localidade => localidade.notas , { onDelete: "CASCADE" })
    @JoinColumn({name: 'localidade'})
    localidade: Localidade
    
    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    created_at: Timestamp;
    
    constructor() {
        if(!this.id) this.id = uuid();
    }

}
