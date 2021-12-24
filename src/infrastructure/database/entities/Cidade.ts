import {Column, CreateDateColumn, Entity, PrimaryColumn, Timestamp, UpdateDateColumn} from "typeorm";
import { v4 as uuid} from 'uuid';

@Entity("cidades")
export class Cidade {

    @PrimaryColumn()
    id: string;

    @Column({type: "varchar", length: 100})
    nome: string;

    @Column({type: "varchar", length: 2})
    estado: string;

    @Column({type: "varchar", length: 50})
    pais: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    created_at: Timestamp;

    constructor() {
        if(!this.id) this.id = uuid();
    }

}
