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

@Controller('parkZones')
export class ParkzoneController {
  constructor(private readonly parkzoneService: ParkzoneService) {}

  @Post()
  create(@Body() createParkzoneDto: CreateParkZoneDto) {
    return this.parkzoneService.create(createParkzoneDto);
  }

  @Get()
  findAll() {
    return this.parkzoneService.findAll();
  }

  @Get(':parkZoneId')
  findOne(@Param('parkZoneId') parkZoneId: string) {
    return this.parkzoneService.findOne(parkZoneId);
  }

  @Put(':parkZoneId')
  update(
    @Param('parkZoneId') parkZoneId: string,
    @Body() updateParkzoneDto: UpdateParkZoneDto,
  ) {
    return this.parkzoneService.update(parkZoneId, updateParkzoneDto);
  }

  @Delete(':parkZoneId')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('parkZoneId') parkZoneId: string) {
    return this.parkzoneService.remove(parkZoneId);
  }
}
