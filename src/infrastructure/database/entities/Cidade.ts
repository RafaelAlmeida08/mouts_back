import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";

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

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}