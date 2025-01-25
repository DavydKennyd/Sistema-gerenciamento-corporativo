
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from '../auth/auth.service';
import { Client } from '../client/entities/client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Client])], // Registra a entidade Cliente
  providers: [AuthService],
  exports: [AuthService],
})
export class DatabaseModule {}