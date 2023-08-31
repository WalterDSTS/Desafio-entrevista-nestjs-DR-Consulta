import { MigrationInterface, QueryRunner } from 'typeorm';

export class PopulateDatabase1693460562726 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        INSERT INTO parkzone (id, name, cnpj, adress, phone, qtt_motorcyle_spots, qtt_car_spots)
        VALUES
        ('b9969a0a-ad95-46f6-b86f-46394b983780', 'Estacionamento Luxuoso', '12.345.678/0001-23', 'Endereço 1', '+551234567890', 20, 50),
        ('e29371f2-5ab6-4ad8-9bd6-8ac4caa95dbf', 'Estacionamento do Zézinho', '12.345.678/0001-24', 'Endereço 2', '+559876543210', 10, 30),
        ('1040b057-9bf9-4b65-bfef-593a2eaf1368', 'Estacionamento MotorCar', '12.345.678/0001-25', 'Endereço 3', '+554567890123', 15, 40),
        ('8805b8ee-287e-4f96-bba2-c7bb17de8949', 'Estacionamento AquiTemSeguro', '12.345.678/0001-26', 'Endereço 4', '+557890123456', 25, 60),
        ('c07757bd-fd3b-4dff-8531-14a8454c3a86', 'Estacionamento do Walter', '12.345.678/0001-27', 'Endereço 5', '+550123456789', 30, 70);
    `,
    );

    await queryRunner.query(
      `
        INSERT INTO vehicle (id, mark, model, color, license_plate, type, entrance_at, exit_at, paid, parkzoneId)
        VALUES
        ('ec5f0bc5-8d98-4f76-bc4e-7ec7ea28239f', 'Volkswagen', 'Sedan', 'Azul', 'ABC-1234', 'CAR', '2023-08-31 20:52:01', '2023-08-31 21:42:01', true, 'e29371f2-5ab6-4ad8-9bd6-8ac4caa95dbf'),
        ('4aa54c93-b70c-43d5-bdea-f41c837740d5', 'Toyota', 'SUV', 'Preto', 'XYZ-5678', 'CAR', '2023-08-31 20:52:01', '2023-08-31 21:42:01', true, 'e29371f2-5ab6-4ad8-9bd6-8ac4caa95dbf'),
        ('8287eae8-f96c-499d-8f83-0368ed6bc92d', 'Honda', 'Hatch', 'Vermelho', 'LMN-9877', 'CAR', '2023-08-31 20:52:01', '2023-08-31 21:42:01', true, 'e29371f2-5ab6-4ad8-9bd6-8ac4caa95dbf'),
        ('31e1e49f-ad04-457b-b543-301ad7c298e7', 'Ford', 'Sedan', 'Branco', 'PQR-5431', 'CAR', '2023-08-31 20:52:01', '2023-08-31 21:42:01', true, 'e29371f2-5ab6-4ad8-9bd6-8ac4caa95dbf'),
        ('d48c88f3-e3a0-4672-8136-64609e1a0cdf', 'Chevrolet', 'SUV', 'Prata', 'JKL-2343', 'CAR', '2023-08-31 20:52:01', '2023-08-31 21:42:01', true, 'e29371f2-5ab6-4ad8-9bd6-8ac4caa95dbf'),
        ('2de60bb1-1d6e-4f2f-b06a-cd2808108c07', 'Nissan', 'Hatch', 'Azul', 'UVW-8764', 'CAR', '2023-08-31 20:52:01', '2023-08-31 21:42:01', true, 'e29371f2-5ab6-4ad8-9bd6-8ac4caa95dbf'),
        ('907f2eb0-136d-43d1-be66-80cbb08c6b91', 'Renault', 'SUV', 'Verde', 'DEF-4564', 'CAR', '2023-08-31 20:52:01', '2023-08-31 21:42:01', true, 'e29371f2-5ab6-4ad8-9bd6-8ac4caa95dbf'),
        ('3bec9497-cac8-405f-a7d6-53d4045d1522', 'Volkswagen', 'Sedan', 'Cinza', 'MNO-1231', 'CAR', '2023-08-31 20:52:01', '2023-08-31 21:42:01', true, 'e29371f2-5ab6-4ad8-9bd6-8ac4caa95dbf'),
        ('cd8cb6cd-301b-410c-9d42-6ce67c76ad41', 'Toyota', 'Hatch', 'Vermelho', 'XYZ-8745', 'CAR', '2023-08-31 20:52:01', '2023-08-31 21:42:01', true, 'e29371f2-5ab6-4ad8-9bd6-8ac4caa95dbf'),
        ('f8548f54-4220-417a-855b-189e99d76e35', 'Ford', 'SUV', 'Branco', 'PQR-3452', 'CAR', '2023-08-31 20:52:01', '2023-08-31 21:42:01', true, 'e29371f2-5ab6-4ad8-9bd6-8ac4caa95dbf'),
        ('191a5cbf-512c-4bac-b8d5-076dce6ed9d8', 'Honda', 'Hatch', 'Prata', 'LMN-2343', 'CAR', '2023-08-31 20:52:01', '2023-08-31 21:42:01', true, 'e29371f2-5ab6-4ad8-9bd6-8ac4caa95dbf'),
        ('fc96d913-b904-4fe5-aa27-c4d3c8120332', 'Toyota', 'SUV', 'Preto', 'XYZ-5679', 'CAR', '2023-08-31 20:52:01', NULL, false, 'e29371f2-5ab6-4ad8-9bd6-8ac4caa95dbf'),
        ('b3b65f14-ee2f-495c-a57c-d07f5c049ea9', 'Honda', 'Hatch', 'Vermelho', 'LMN-9876', 'CAR', '2023-09-01 20:52:01', '2023-09-01 21:42:01', true, 'e29371f2-5ab6-4ad8-9bd6-8ac4caa95dbf'),
        ('5639cbb5-7c30-4e06-be96-3ac3428b77f2', 'Ford', 'Sedan', 'Branco', 'PQR-5432', 'CAR', '2023-09-01 20:52:01', '2023-09-01 21:42:01', true, 'e29371f2-5ab6-4ad8-9bd6-8ac4caa95dbf'),
        ('79ffb759-e079-4d9f-b636-277b6a9eba9a', 'Chevrolet', 'SUV', 'Prata', 'JKL-2345', 'CAR', '2023-09-01 20:52:01', '2023-09-01 21:42:01', true, 'e29371f2-5ab6-4ad8-9bd6-8ac4caa95dbf'),
        ('3ce07956-2be8-44bb-8174-37c40f35be72', 'Nissan', 'Hatch', 'Azul', 'UVW-8765', 'CAR', '2023-09-01 20:52:01', '2023-09-01 21:42:01', true, 'e29371f2-5ab6-4ad8-9bd6-8ac4caa95dbf'),
        ('7fbbf4aa-eb22-4a2c-9e96-5f398c3c4700', 'Renault', 'SUV', 'Verde', 'DEF-4567', 'CAR', '2023-09-01 20:52:01', '2023-09-01 21:42:01', true, 'e29371f2-5ab6-4ad8-9bd6-8ac4caa95dbf'),
        ('3eb6c588-467b-4a44-9e9a-a34aaad6dad0', 'Volkswagen', 'Sedan', 'Cinza', 'MNO-1234', 'CAR', '2023-09-01 20:52:01', '2023-09-01 21:42:01', true, 'e29371f2-5ab6-4ad8-9bd6-8ac4caa95dbf'),
        ('6a336ee8-e053-4fa2-a770-c634874b3af2', 'Toyota', 'Hatch', 'Vermelho', 'XYZ-8765', 'CAR', '2023-09-01 20:52:01', NULL, false, 'e29371f2-5ab6-4ad8-9bd6-8ac4caa95dbf'),
        ('9c399247-6182-4ac3-9460-d021a006add6', 'Ford', 'SUV', 'Branco', 'PQR-3456', 'CAR', '2023-09-01 20:52:01', NULL, false, 'e29371f2-5ab6-4ad8-9bd6-8ac4caa95dbf'),
        ('28ceeacf-6c3d-4045-8fca-59249fe3af62', 'Honda', 'Hatch', 'Prata', 'LMN-2345', 'CAR', '2023-09-01 20:52:01', NULL, false, 'e29371f2-5ab6-4ad8-9bd6-8ac4caa95dbf'),
        ('29afc8a6-ad3e-4d48-b50f-dc3a87457f1c', 'Chevrolet', 'Sedan', 'Azul', 'DEF-7890', 'CAR', '2023-09-01 20:52:01', NULL, false, 'e29371f2-5ab6-4ad8-9bd6-8ac4caa95dbf'),
        ('fb7cce08-9453-410e-bc04-2da1578e47f1', 'Nissan', 'SUV', 'Cinza', 'MNO-4567', 'CAR', '2023-09-01 20:52:01', NULL, false, 'e29371f2-5ab6-4ad8-9bd6-8ac4caa95dbf'),
        ('5e4cfb14-1283-4f8b-b979-e7ca2d80a471', 'Renault', 'Hatch', 'Branco', 'XYZ-3456', 'CAR', '2023-09-01 20:52:01', NULL, false, 'e29371f2-5ab6-4ad8-9bd6-8ac4caa95dbf');
    `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM vehicle`);
    await queryRunner.query(`DELETE FROM parkzone`);
  }
}
