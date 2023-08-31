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
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('vehicles')
@ApiBearerAuth()
@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @ApiOperation({
    summary: 'Cria um novo registro de entrada de um veículo',
  })
  @ApiResponse({
    status: 201,
    description: 'Entry allowed.',
  })
  @ApiResponse({
    status: 404,
    description: 'Parkzone not found.',
  })
  @ApiResponse({
    status: 409,
    description: 'This vehicle is still parked.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  @Post(':parkZoneId')
  create(
    @Param('parkZoneId', ParseUUIDPipe) parkZoneId: string,
    @Body() createVehicleDto: CreateVehicleDto,
  ) {
    return this.vehiclesService.create(parkZoneId, createVehicleDto);
  }

  @ApiOperation({
    summary: 'Lista todos os veículos',
  })
  @ApiResponse({
    status: 200,
    description: 'All vehicles.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  @Get()
  findAll() {
    return this.vehiclesService.findAll();
  }

  @ApiOperation({
    summary: 'Lista a quantidade de veícuclos ainda estacionados',
  })
  @ApiResponse({
    status: 200,
    description: 'Parked vehicles.',
  })
  @ApiResponse({
    status: 404,
    description: 'No vehicles parked.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  @Get('still-parked')
  findAllStillParked(
    @Query('startDate') startDate: Date,
    @Query('endDate') endDate: Date,
  ) {
    return this.vehiclesService.findAllStillParked(startDate, endDate);
  }

  @ApiOperation({
    summary: 'Lista a quantidade de veícuclos que entraram e que sairam',
  })
  @ApiResponse({
    status: 200,
    description: 'List entrance/exit vehicles.',
  })
  @ApiResponse({
    status: 404,
    description: 'No vehicles parked.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  @Get('entrance-exit')
  findAllEntranceExit(
    @Query('startDate') startDate: Date,
    @Query('endDate') endDate: Date,
  ) {
    return this.vehiclesService.findAllEntranceExit(startDate, endDate);
  }

  @ApiOperation({
    summary: 'Busca um veículo pelo Nº da placa',
  })
  @ApiResponse({
    status: 200,
    description: 'Vehicle found.',
  })
  @ApiResponse({
    status: 404,
    description: 'Vehicle not found.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  @Get(':licensePlate')
  findOne(@Param('licensePlate') licensePlate: string) {
    return this.vehiclesService.findOne(licensePlate);
  }

  @ApiOperation({
    summary: 'Libera a saída de um veículo e registra o horário',
  })
  @ApiResponse({
    status: 204,
    description: 'Exit allowed.',
  })
  @ApiResponse({
    status: 404,
    description: 'Vehicle not found.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  @Patch(':licensePlate')
  @HttpCode(HttpStatus.NO_CONTENT)
  update(
    @Param('licensePlate') licensePlate: string,
    @Body() updateVehicleDto: UpdateVehicleDto,
  ) {
    return this.vehiclesService.update(licensePlate, updateVehicleDto);
  }
}
