import { User } from 'src/modules/users/entities/user.entity';
import { Vehicle } from 'src/modules/vehicles/entities/vehicle.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('parkzone')
export class ParkZone {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', type: 'varchar', length: 80 })
  name: string;

  @Column({ name: 'cnpj', type: 'varchar', length: 18, unique: true })
  cnpj: string;

  @Column({ name: 'adress', type: 'varchar', length: 150 })
  address: string;

  @Column({ name: 'phone', type: 'varchar', length: 14 })
  phone: string;

  @Column({ name: 'qtt_motorcyle_spots', type: 'int' })
  qttMotorcycleSpots: number;

  @Column({ name: 'qtt_cars_spots', type: 'int' })
  qttCarSpots: number;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.parkzone)
  vehicles: Vehicle[];

  @ManyToMany(() => User, (user) => user.parkZones)
  users: User[];
}
