import {MigrationInterface, QueryRunner} from "typeorm";

export class MudandoTimestamp1640311696608 implements MigrationInterface {
    name = 'MudandoTimestamp1640311696608'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`cidades\` (\`id\` varchar(255) NOT NULL, \`nome\` varchar(100) NOT NULL, \`estado\` varchar(2) NOT NULL, \`pais\` varchar(50) NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tipos\` (\`id\` int NOT NULL, \`nome\` varchar(255) NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`localidades\` (\`id\` varchar(255) NOT NULL, \`nome\` varchar(100) NOT NULL, \`endereco\` varchar(255) NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`localidade_tipo\` int NULL, \`cidade\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`localidades\` ADD CONSTRAINT \`FK_c6a14fd0d7b31d36550bf554a48\` FOREIGN KEY (\`localidade_tipo\`) REFERENCES \`tipos\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`localidades\` ADD CONSTRAINT \`FK_a2a1329aaac729ffc4ca4bbb3ce\` FOREIGN KEY (\`cidade\`) REFERENCES \`cidades\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query("INSERT INTO \`tipos`(`id`, `nome`) VALUES (1,'Comercial'), (2, 'Residencial'), (3, 'Outros')");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`localidades\` DROP FOREIGN KEY \`FK_a2a1329aaac729ffc4ca4bbb3ce\``);
        await queryRunner.query(`ALTER TABLE \`localidades\` DROP FOREIGN KEY \`FK_c6a14fd0d7b31d36550bf554a48\``);
        await queryRunner.query(`DROP TABLE \`localidades\``);
        await queryRunner.query(`DROP TABLE \`tipos\``);
        await queryRunner.query(`DROP TABLE \`cidades\``);
    }

}
