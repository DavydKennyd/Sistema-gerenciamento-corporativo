import { Repository } from 'typeorm';
import { Client } from '../client/entities/client.entity';
export declare class StaffService {
    private readonly clientRepository;
    constructor(clientRepository: Repository<Client>);
    findOne(username: string): Promise<Client | undefined>;
}
