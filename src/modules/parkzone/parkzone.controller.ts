import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParkzoneService } from './parkzone.service';
import { CreateParkzoneDto } from './dto/create-parkzone.dto';
import { UpdateParkzoneDto } from './dto/update-parkzone.dto';

@Controller('parkzone')
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parkzoneService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParkzoneDto: UpdateParkzoneDto) {
    return this.parkzoneService.update(+id, updateParkzoneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parkzoneService.remove(+id);
  }
}
