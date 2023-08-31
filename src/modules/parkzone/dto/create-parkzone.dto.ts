import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsPhoneNumber,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export class CreateParkZoneDto {
  @ApiProperty({
    example: 'Estacionamento do Walter',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: '12.345.678/0001-23',
  })
  @IsString()
  @IsNotEmpty()
  @Length(18, 18)
  cnpj: string;

  @ApiProperty({
    example: 'R. 1, California',
  })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({
    example: '+5511988887777',
  })
  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    example: '100',
  })
  @IsPositive()
  @IsNotEmpty()
  qttMotorcycleSpots: number;

  @ApiProperty({
    example: '100',
  })
  @IsPositive()
  @IsNotEmpty()
  qttCarSpots: number;
}
