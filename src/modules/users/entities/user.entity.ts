import { Parkzone } from 'src/modules/parkzone/entities/parkzone.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', type: 'varchar', length: 80 })
  name: string;

  @Column({ name: 'email', type: 'varchar', length: 30, unique: true })
  email: string;

  @Column({ name: 'password', type: 'varchar', length: 60 })
  password: string;

  @ManyToMany(() => Parkzone)
  parkzones: Parkzone[];
}
