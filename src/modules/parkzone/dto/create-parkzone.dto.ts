import {
  IsNotEmpty,
  IsPhoneNumber,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export class CreateParkzoneDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length(18, 18)
  cnpj: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string;

  @IsPositive()
  @IsNotEmpty()
  numberOfMotorcycleSpots: number;

  @IsPositive()
  @IsNotEmpty()
  numberOfCarSpots: number;
}
