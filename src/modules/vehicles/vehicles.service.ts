import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';
import { IsNull, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ParkZone } from '../parkzone/entities/parkzone.entity';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepo: Repository<Vehicle>,
    @InjectRepository(ParkZone)
    private readonly parkZoneRepo: Repository<ParkZone>,
  ) {}

  async create(parkzoneId: string, createVehicleDto: CreateVehicleDto) {
    const { licensePlate } = createVehicleDto;

    const vehicleExists = await this.vehicleRepo.findOne({
      where: { licensePlate, parkingExit: IsNull() },
    });

    if (vehicleExists) {
      throw new ConflictException('This vehicle is still parked.');
    }

    const parkzone = await this.parkZoneRepo.findOneBy({
      id: parkzoneId,
    });

    if (!parkzone) {
      throw new NotFoundException('Parkzone not found.');
    }

    const vehicle = this.vehicleRepo.create({
      ...createVehicleDto,
      parkzone,
    });

    return this.vehicleRepo.save(vehicle);
  }

  findAll() {
    return this.vehicleRepo.find();
  }

  async findOne(licensePlate: string) {
    const vehicle = await this.vehicleRepo.findOne({
      where: { licensePlate: licensePlate, parkingExit: IsNull() },
    });

    if (!vehicle) {
      throw new NotFoundException('Vehicle not found.');
    }

    return vehicle;
  }

  async update(licensePlate: string, updateVehicleDto: UpdateVehicleDto) {
    const vehicle = await this.vehicleRepo.findOne({
      where: { licensePlate: licensePlate, parkingExit: IsNull() },
    });

    if (!vehicle) {
      throw new NotFoundException('Vehicle not found.');
    }

    await this.vehicleRepo.update(vehicle.id, updateVehicleDto);
  }
}
