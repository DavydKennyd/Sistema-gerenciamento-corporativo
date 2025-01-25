import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  Client } from './client/entities/client.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // ou o banco que você está usando
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'ifrn.cn',
      database: 'BD_inventario',
      entities: [Client], // Entidades que serão mapeadas
      synchronize: true, // Usar com cuidado em produção (cria/atualiza tabelas automaticamente)
    }),
  ],
})
export class AppModule {}