import { In, Like, Raw, Repository } from 'typeorm';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.mysql.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async createOrSave(user) {
    // return this.userRepository.save(user);
    const newUser = await this.userRepository.create(user);
    return await this.userRepository.save(newUser);
  }
}
