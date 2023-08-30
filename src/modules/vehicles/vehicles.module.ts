import { Module } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { VehiclesController } from './vehicles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { ParkZone } from '../parkzone/entities/parkzone.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle, ParkZone])],
  controllers: [VehiclesController],
  providers: [VehiclesService],
})
export class VehiclesModule {}
