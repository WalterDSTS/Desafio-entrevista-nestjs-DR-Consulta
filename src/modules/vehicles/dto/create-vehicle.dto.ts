import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';
import { VehicleType } from '../entities/Vehicle';
import { ApiProperty } from '@nestjs/swagger';

export class CreateVehicleDto {
  @ApiProperty({
    example: 'Volkswagen',
  })
  @IsString()
  @IsNotEmpty()
  mark: string;

  @ApiProperty({
    example: 'Sedan',
  })
  @IsString()
  @IsNotEmpty()
  model: string;

  @ApiProperty({
    example: 'Preto',
  })
  @IsString()
  @IsNotEmpty()
  color: string;

  @ApiProperty({
    example: 'DQP-4O99',
  })
  @IsString()
  @IsNotEmpty()
  @Length(8, 8)
  licensePlate: string;

  @ApiProperty({
    example: 'CAR',
    enum: ['CAR', 'MOTORCYCLE'],
  })
  @IsNotEmpty()
  @IsEnum(VehicleType)
  type: VehicleType;

  @ApiProperty({
    example: '2023-05-28T20:52:01-03:00',
  })
  @IsNotEmpty()
  @IsDateString()
  @IsNotEmpty()
  parkingEntrance: Date;
}
