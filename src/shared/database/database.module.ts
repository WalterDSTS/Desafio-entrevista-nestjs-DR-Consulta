import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parkzone } from 'src/modules/parkzone/entities/parkzone.entity';
import { Vehicle } from 'src/modules/vehicles/entities/vehicle.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.getOrThrow('MYSQL_HOST'),
        port: configService.getOrThrow('MYSQL_PORT'),
        username: configService.getOrThrow('MYSQL_USERNAME'),
        password: configService.getOrThrow('MYSQL_PASSWORD'),
        database: configService.getOrThrow('MYSQL_DATABASE'),
        entities: [Parkzone, Vehicle],
        autoLoadEntities: true,
        synchronize: configService.getOrThrow('MYSQL_SYNCHRONIZE'),
        logging: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
