import { IsBoolean, IsDateString, IsNotEmpty } from 'class-validator';

export class UpdateVehicleDto {
  @IsBoolean()
  @IsNotEmpty()
  paid: boolean;

  @IsNotEmpty()
  @IsDateString()
  parkingExit: Date;
}
