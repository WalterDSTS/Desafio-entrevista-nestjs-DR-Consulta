import { ParkZone } from 'src/modules/parkzone/entities/parkzone.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { VehicleType } from './Vehicle';

@Entity('vehicle')
export class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'mark', type: 'varchar', length: 50 })
  mark: string;

  @Column({ name: 'model', type: 'varchar', length: 50 })
  model: string;

  @Column({ name: 'color', type: 'varchar', length: 20 })
  color: string;

  @Column({ name: 'license_plate', type: 'varchar', unique: true, length: 8 })
  licensePlate: string;

  @Column({ name: 'type', type: 'enum', enum: VehicleType })
  type: VehicleType;

  @Column({ name: 'entrance_at', type: 'timestamp', update: false })
  parkingEntrance: Date;

  @Column({ name: 'exit_at', type: 'timestamp', default: null })
  parkingExit: Date;

  @Column({ name: 'paid', default: false })
  paid: boolean;

  @ManyToOne(() => ParkZone, (parkZone) => parkZone.vehicles)
  parkzone: ParkZone;
}
