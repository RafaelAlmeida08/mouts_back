import {Column, Entity, PrimaryColumn,Timestamp} from "typeorm";

@Entity("tipos")
export class Tipo {

    @PrimaryColumn({select: false})
    id: number;

    @Column({type: "varchar", length: 255})
    nome: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    created_at: Timestamp;

    @Column({ type: "timestamp", onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
    updated_at: Timestamp;

}
