import { Injectable } from '@nestjs/common';
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

  create(createParkzoneDto: CreateParkzoneDto) {
    return 'This action adds a new parkzone';
  }

  findAll() {
    return `This action returns all parkzone`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parkzone`;
  }

  update(id: number, updateParkzoneDto: UpdateParkzoneDto) {
    return `This action updates a #${id} parkzone`;
  }

  remove(id: number) {
    return `This action removes a #${id} parkzone`;
  }
}
