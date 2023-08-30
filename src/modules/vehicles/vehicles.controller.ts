import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  ParseUUIDPipe,
  HttpCode,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Post(':parkZoneId')
  create(
    @Param('parkZoneId', ParseUUIDPipe) parkZoneId: string,
    @Body() createVehicleDto: CreateVehicleDto,
  ) {
    return this.vehiclesService.create(parkZoneId, createVehicleDto);
  }

  @Get()
  findAll() {
    return this.vehiclesService.findAll();
  }

  @Get('still-parked')
  findAllStillParked(
    @Query('startDate') startDate: Date,
    @Query('endDate') endDate: Date,
  ) {
    return this.vehiclesService.findAllStillParked(startDate, endDate);
  }

  @Get('entrance-exit')
  findAllEntranceExit(
    @Query('startDate') startDate: Date,
    @Query('endDate') endDate: Date,
  ) {
    return this.vehiclesService.findAllEntranceExit(startDate, endDate);
  }

  @Get(':licensePlate')
  findOne(@Param('licensePlate') licensePlate: string) {
    return this.vehiclesService.findOne(licensePlate);
  }

  @Patch(':licensePlate')
  @HttpCode(HttpStatus.NO_CONTENT)
  update(
    @Param('licensePlate') licensePlate: string,
    @Body() updateVehicleDto: UpdateVehicleDto,
  ) {
    return this.vehiclesService.update(licensePlate, updateVehicleDto);
  }
}
