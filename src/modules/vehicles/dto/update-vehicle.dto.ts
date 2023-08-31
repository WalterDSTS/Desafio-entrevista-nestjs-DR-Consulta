import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNotEmpty } from 'class-validator';

export class UpdateVehicleDto {
  @ApiProperty({
    example: 'true',
  })
  @IsBoolean()
  @IsNotEmpty()
  paid: boolean;

  @ApiProperty({
    example: '2023-09-01T17:00:00-03:00',
  })
  @IsNotEmpty()
  @IsDateString()
  parkingExit: Date;
}
