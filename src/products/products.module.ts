import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity'; // Altere para o caminho correto da sua entidade

@Module({
  imports: [TypeOrmModule.forFeature([Product])],  
  controllers: [ProductsController],              
  providers: [ProductsService],                    
})
export class ProductsModule {}
