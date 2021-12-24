import {Column, Entity, PrimaryColumn,Timestamp} from "typeorm";

@Entity("categorias")
export class Categoria {

    @PrimaryColumn()
    id: number;

    @Column({type: "varchar", length: 255})
    nome: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    created_at: Timestamp;

}
