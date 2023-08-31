import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ParkzoneService } from './parkzone.service';
import { CreateParkZoneDto } from './dto/create-parkzone.dto';
import { UpdateParkZoneDto } from './dto/update-parkzone.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('pakzones')
@ApiBearerAuth()
@Controller('parkZones')
export class ParkzoneController {
  constructor(private readonly parkzoneService: ParkzoneService) {}

  @ApiOperation({
    summary: 'Registra um novo estacionamento',
  })
  @ApiResponse({
    status: 201,
    description: 'ParkZone created.',
  })
  @ApiResponse({
    status: 409,
    description: 'This Parkzone is already registered.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  @Post()
  create(@Body() createParkzoneDto: CreateParkZoneDto) {
    return this.parkzoneService.create(createParkzoneDto);
  }

  @ApiOperation({
    summary: 'Lista todos os estacionamentos',
  })
  @ApiResponse({
    status: 200,
    description: 'All parkzones.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  @Get()
  findAll() {
    return this.parkzoneService.findAll();
  }

  @ApiOperation({
    summary: 'Lista um estacionamento específico',
  })
  @ApiResponse({
    status: 200,
    description: 'ParkZone found.',
  })
  @ApiResponse({
    status: 404,
    description: 'Parkzone not found.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  @Get(':parkZoneId')
  findOne(@Param('parkZoneId') parkZoneId: string) {
    return this.parkzoneService.findOne(parkZoneId);
  }

  @ApiOperation({
    summary: 'Atualiza as informações um estacionamento específico',
  })
  @ApiResponse({
    status: 200,
    description: 'ParkZone updated.',
  })
  @ApiResponse({
    status: 404,
    description: 'Parkzone not found.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  @Put(':parkZoneId')
  update(
    @Param('parkZoneId') parkZoneId: string,
    @Body() updateParkzoneDto: UpdateParkZoneDto,
  ) {
    return this.parkzoneService.update(parkZoneId, updateParkzoneDto);
  }

  @ApiOperation({
    summary: 'Deleta as informações um estacionamento específico',
  })
  @ApiResponse({
    status: 204,
    description: 'ParkZone deleted.',
  })
  @ApiResponse({
    status: 404,
    description: 'Parkzone not found.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error.',
  })
  @Delete(':parkZoneId')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('parkZoneId') parkZoneId: string) {
    return this.parkzoneService.remove(parkZoneId);
  }
}
