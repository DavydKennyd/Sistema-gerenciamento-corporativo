

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../client/entities/client.entity';


@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async findOne(username: string): Promise<Client | undefined> {
    return this.clientRepository.findOne({ where: { username } });

  }
}