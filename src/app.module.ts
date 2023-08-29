import { Module } from '@nestjs/common';
import { DatabaseModule } from './shared/database/database.module';
import { ParkzoneModule } from './modules/parkzone/parkzone.module';
import { VehiclesModule } from './modules/vehicles/vehicles.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    ParkzoneModule,
    VehiclesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
