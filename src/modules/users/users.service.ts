import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepo: Repository<User>,
  ) {}

  findUserById(userId: string) {
    return this.usersRepo.findOne({
      where: { id: userId },
      select: {
        name: true,
        email: true,
      },
    });
  }
}
