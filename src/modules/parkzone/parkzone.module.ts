import { Module } from '@nestjs/common';
import { ParkzoneService } from './parkzone.service';
import { ParkzoneController } from './parkzone.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkZone } from './entities/parkzone.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ParkZone])],
  controllers: [ParkzoneController],
  providers: [ParkzoneService],
})
export class ParkZoneModule {}
