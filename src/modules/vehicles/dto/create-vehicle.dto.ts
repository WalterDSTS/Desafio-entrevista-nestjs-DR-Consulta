import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';
import { VehicleType } from '../entities/Vehicle';

export class CreateVehicleDto {
  @IsString()
  @IsNotEmpty()
  mark: string;
  @IsString()
  @IsNotEmpty()
  model: string;
  @IsString()
  @IsNotEmpty()
  color: string;
  @IsString()
  @IsNotEmpty()
  @Length(8, 8)
  licensePlate: string;
  @IsNotEmpty()
  @IsEnum(VehicleType)
  type: VehicleType;
  @IsNotEmpty()
  @IsDateString()
  @IsNotEmpty()
  parkingEntrance: Date;
}
