import {MigrationInterface, QueryRunner} from "typeorm";

export class CriandoCidade1640301773881 implements MigrationInterface {
    name = 'CriandoCidade1640301773881'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`cidades\` (\`id\` varchar(255) NOT NULL, \`nome\` varchar(100) NOT NULL, \`estado\` varchar(2) NOT NULL, \`pais\` varchar(50) NOT NULL, \`created_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updated_at\` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`cidades\``);
    }

}
