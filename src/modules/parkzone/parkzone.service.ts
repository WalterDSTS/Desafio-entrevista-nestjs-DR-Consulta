import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateParkZoneDto } from './dto/create-parkzone.dto';
import { UpdateParkZoneDto } from './dto/update-parkzone.dto';
import { Repository } from 'typeorm';
import { ParkZone } from './entities/parkzone.entity';

@Injectable()
export class ParkzoneService {
  constructor(
    @InjectRepository(ParkZone)
    private readonly parkZoneRepo: Repository<ParkZone>,
  ) {}

  async create(createParkzoneDto: CreateParkZoneDto) {
    const { cnpj } = createParkzoneDto;

    const parkZoneExists = await this.parkZoneRepo.findOne({
      where: { cnpj },
    });

    if (parkZoneExists) {
      throw new InternalServerErrorException(
        'This Parkzone is already registered.',
      );
    }

    const parkZone = this.parkZoneRepo.create(createParkzoneDto);

    return this.parkZoneRepo.save(parkZone);
  }

  findAll() {
    return this.parkZoneRepo.find();
  }

  findOne(parkZoneId: string) {
    return this.parkZoneRepo.findOneBy({
      id: parkZoneId,
    });
  }

  async update(parkZoneId: string, updateParkzoneDto: UpdateParkZoneDto) {
    const parkzone = await this.parkZoneRepo.findOneBy({
      id: parkZoneId,
    });

    this.parkZoneRepo.merge(parkzone, updateParkzoneDto);

    return this.parkZoneRepo.save(parkzone);
  }

  async remove(parkZoneId: string) {
    return !!(await this.parkZoneRepo.delete(parkZoneId));
  }
}
