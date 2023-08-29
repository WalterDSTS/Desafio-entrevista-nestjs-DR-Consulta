import { Module } from '@nestjs/common';
import { ParkzoneService } from './parkzone.service';
import { ParkzoneController } from './parkzone.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parkzone } from './entities/parkzone.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Parkzone])],
  controllers: [ParkzoneController],
  providers: [ParkzoneService],
})
export class ParkzoneModule {}
