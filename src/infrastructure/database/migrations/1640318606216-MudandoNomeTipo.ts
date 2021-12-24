import {MigrationInterface, QueryRunner} from "typeorm";

export class MudandoNomeTipo1640318606216 implements MigrationInterface {
    name = 'MudandoNomeTipo1640318606216'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`categorias\` (\`id\` int NOT NULL, \`nome\` varchar(255) NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cidades\` (\`id\` varchar(255) NOT NULL, \`nome\` varchar(100) NOT NULL, \`estado\` varchar(2) NOT NULL, \`pais\` varchar(50) NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`notas\` (\`id\` varchar(255) NOT NULL, \`descricao\` varchar(255) NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`localidade\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`localidades\` (\`id\` varchar(255) NOT NULL, \`nome\` varchar(100) NOT NULL, \`endereco\` varchar(255) NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`categoria\` int NULL, \`cidade\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`notas\` ADD CONSTRAINT \`FK_e312ab44309f48decb689d69d17\` FOREIGN KEY (\`localidade\`) REFERENCES \`localidades\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`localidades\` ADD CONSTRAINT \`FK_7a38d6ff7a01677559699eea92c\` FOREIGN KEY (\`categoria\`) REFERENCES \`categorias\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`localidades\` ADD CONSTRAINT \`FK_a2a1329aaac729ffc4ca4bbb3ce\` FOREIGN KEY (\`cidade\`) REFERENCES \`cidades\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`localidades\` DROP FOREIGN KEY \`FK_a2a1329aaac729ffc4ca4bbb3ce\``);
        await queryRunner.query(`ALTER TABLE \`localidades\` DROP FOREIGN KEY \`FK_7a38d6ff7a01677559699eea92c\``);
        await queryRunner.query(`ALTER TABLE \`notas\` DROP FOREIGN KEY \`FK_e312ab44309f48decb689d69d17\``);
        await queryRunner.query(`DROP TABLE \`localidades\``);
        await queryRunner.query(`DROP TABLE \`notas\``);
        await queryRunner.query(`DROP TABLE \`cidades\``);
        await queryRunner.query(`DROP TABLE \`categorias\``);
    }

}
