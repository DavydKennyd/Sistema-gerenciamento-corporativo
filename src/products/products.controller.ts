import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Patch,
    Query,
    UseGuards,
    Req,
  } from '@nestjs/common';
  import { ProductsService } from './products.service';
  import { CreateProductDto } from './dto/create-product.dto';
  import { AuthGuard } from '../auth/auth.guard';
  import { Request } from 'express';
  
  @Controller('products')
  @UseGuards(AuthGuard) // Aplica o guard para proteger todos os endpoints
  export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}
  
    // 1. Adicionar um produto ao estoque
    @Post()
    createProduct(@Body() createProductDto: CreateProductDto, @Req() req: Request) {
      const user = req['user']; // Dados do usuário autenticado
      console.log('Usuário autenticado:', user);
      return this.productsService.create(createProductDto);
    }
  
    // 2. Listar todos os produtos no estoque (Rastreamento)
    @Get()
    findAll(@Req() req: Request, @Query('search') search?: string) {
    const user = req['user']; // Dados do usuário autenticado
    console.log('Usuário autenticado:', user);
    return this.productsService.findAll(search);
}

  
    // 3. Ver detalhes de um produto específico
    @Get(':id')
    findOne(@Param('id') id: string, @Req() req: Request) {
      const user = req['user']; // Dados do usuário autenticado
      console.log('Usuário autenticado:', user);
      return this.productsService.findOne(id);
    }
  
    // 4. Registrar entrada ou saída de materiais
    @Patch(':id/movement')
    updateStock(
      @Param('id') id: string,
      @Body('quantity') quantity: number,
      @Req() req: Request,
    ) {
      const user = req['user']; // Dados do usuário autenticado
      console.log('Usuário autenticado:', user);
      return this.productsService.updateStock(id, quantity);
    }
  
    // 5. Notificar sobre produtos com estoque baixo
    @Get('low-stock')
    getLowStockProducts(@Req() req: Request) {
      const user = req['user']; // Dados do usuário autenticado
      console.log('Usuário autenticado:', user);
      return this.productsService.getLowStockProducts();
    }
  
    // 6. Gerar relatórios de movimentação
    @Get(':id/report')
    getProductReport(@Param('id') id: string, @Req() req: Request) {
      const user = req['user']; // Dados do usuário autenticado
      console.log('Usuário autenticado:', user);
      return this.productsService.getProductReport(id);
    }
  }
  