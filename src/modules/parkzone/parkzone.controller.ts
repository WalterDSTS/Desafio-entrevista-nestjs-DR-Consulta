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
import { CreateParkzoneDto } from './dto/create-parkzone.dto';
import { UpdateParkzoneDto } from './dto/update-parkzone.dto';

@Controller('parkzones')
export class ParkzoneController {
  constructor(private readonly parkzoneService: ParkzoneService) {}

  @Post()
  create(@Body() createParkzoneDto: CreateParkzoneDto) {
    return this.parkzoneService.create(createParkzoneDto);
  }

  @Get()
  findAll() {
    return this.parkzoneService.findAll();
  }

  @Get(':parkzoneId')
  findOne(@Param('parkzoneId') parkzoneId: string) {
    return this.parkzoneService.findOne(parkzoneId);
  }

  @Put(':parkzoneId')
  update(
    @Param('parkzoneId') parkzoneId: string,
    @Body() updateParkzoneDto: UpdateParkzoneDto,
  ) {
    return this.parkzoneService.update(parkzoneId, updateParkzoneDto);
  }

  @Delete(':parkzoneId')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('parkzoneId') parkzoneId: string) {
    return this.parkzoneService.remove(parkzoneId);
  }
}
