import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTablesByEntities1693459508277 implements MigrationInterface {
  name = 'CreateTablesByEntities1693459508277';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(80) NOT NULL, \`email\` varchar(30) NOT NULL, \`password\` varchar(60) NOT NULL, UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`vehicle\` (\`id\` varchar(36) NOT NULL, \`mark\` varchar(50) NOT NULL, \`model\` varchar(50) NOT NULL, \`color\` varchar(20) NOT NULL, \`license_plate\` varchar(8) NOT NULL, \`type\` enum ('CAR', 'MOTORCYCLE') NOT NULL, \`entrance_at\` timestamp NOT NULL, \`exit_at\` timestamp NULL, \`paid\` tinyint NOT NULL DEFAULT 0, \`parkzoneId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`parkzone\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(80) NOT NULL, \`cnpj\` varchar(18) NOT NULL, \`adress\` varchar(150) NOT NULL, \`phone\` varchar(14) NOT NULL, \`qtt_motorcyle_spots\` int NOT NULL, \`qtt_car_spots\` int NOT NULL, UNIQUE INDEX \`IDX_40faf80623a2fc7d5ef491c4a4\` (\`cnpj\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`vehicle\` ADD CONSTRAINT \`FK_651eb2bf3bad347c88e35aaa523\` FOREIGN KEY (\`parkzoneId\`) REFERENCES \`parkzone\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`vehicle\` DROP FOREIGN KEY \`FK_651eb2bf3bad347c88e35aaa523\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_40faf80623a2fc7d5ef491c4a4\` ON \`parkzone\``,
    );
    await queryRunner.query(`DROP TABLE \`parkzone\``);
    await queryRunner.query(`DROP TABLE \`vehicle\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``,
    );
    await queryRunner.query(`DROP TABLE \`user\``);
  }
}
