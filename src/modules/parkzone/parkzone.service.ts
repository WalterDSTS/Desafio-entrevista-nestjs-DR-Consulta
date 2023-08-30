import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
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

  async findOne(parkZoneId: string) {
    const parkZone = await this.parkZoneRepo.findOneBy({
      id: parkZoneId,
    });

    if (!parkZone) throw new NotFoundException('ParkZone not found.');

    return parkZone;
  }

  async update(parkZoneId: string, updateParkzoneDto: UpdateParkZoneDto) {
    const parkZone = await this.parkZoneRepo.findOneBy({
      id: parkZoneId,
    });

    if (!parkZone) throw new NotFoundException('ParkZone not found.');

    this.parkZoneRepo.merge(parkZone, updateParkzoneDto);

    return this.parkZoneRepo.save(parkZone);
  }

  async remove(parkZoneId: string) {
    const parkZone = await this.parkZoneRepo.findOneBy({
      id: parkZoneId,
    });

    if (!parkZone) throw new NotFoundException('ParkZone not found.');

    return await this.parkZoneRepo.delete(parkZoneId);
  }
}
