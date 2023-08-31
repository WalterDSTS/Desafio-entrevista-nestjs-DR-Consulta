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
    example: '2023-05-28T21:52:01-03:00',
  })
  @IsNotEmpty()
  @IsDateString()
  parkingExit: Date;
}
