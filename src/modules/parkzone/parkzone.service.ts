import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateParkzoneDto } from './dto/create-parkzone.dto';
import { UpdateParkzoneDto } from './dto/update-parkzone.dto';
import { Repository } from 'typeorm';
import { Parkzone } from './entities/parkzone.entity';

@Injectable()
export class ParkzoneService {
  constructor(
    @InjectRepository(Parkzone)
    private readonly parkzoneRepo: Repository<Parkzone>,
  ) {}

  async create(createParkzoneDto: CreateParkzoneDto) {
    const { cnpj } = createParkzoneDto;

    const parkzoneExists = await this.parkzoneRepo.findOne({
      where: { cnpj },
    });

    if (parkzoneExists) {
      throw new InternalServerErrorException(
        'This Parkzone is already registered.',
      );
    }

    const parkZone = this.parkzoneRepo.create(createParkzoneDto);

    return this.parkzoneRepo.save(parkZone);
  }

  findAll() {
    return this.parkzoneRepo.find();
  }

  findOne(parkzoneId: string) {
    return this.parkzoneRepo.findOneBy({
      id: parkzoneId,
    });
  }

  async update(parkzoneId: string, updateParkzoneDto: UpdateParkzoneDto) {
    const parkzone = await this.parkzoneRepo.findOneBy({
      id: parkzoneId,
    });

    this.parkzoneRepo.merge(parkzone, updateParkzoneDto);

    return this.parkzoneRepo.save(parkzone);
  }

  async remove(parkzoneId: string) {
    return !!(await this.parkzoneRepo.delete(parkzoneId));
  }
}
