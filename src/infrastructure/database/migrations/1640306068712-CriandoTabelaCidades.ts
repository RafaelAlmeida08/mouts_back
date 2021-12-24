import {MigrationInterface, QueryRunner} from "typeorm";

export class CriandoTabelaCidades1640306068712 implements MigrationInterface {
    name = 'CriandoTabelaCidades1640306068712'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`cidades\` (\`id\` varchar(255) NOT NULL, \`nome\` varchar(100) NOT NULL, \`estado\` varchar(2) NOT NULL, \`pais\` varchar(50) NOT NULL, \`created_at\` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`cidades\``);
    }
 
}
