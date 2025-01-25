import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from '../client/entities/client.entity'; // Caminho para a entidade
import { StaffService } from './staff.service';

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  providers: [StaffService],
  exports: [StaffService],
})
export class StaffModule {}
