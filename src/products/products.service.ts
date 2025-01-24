import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
    private products = [];
    private movements = [];

    // Criar produto
    create(createProductDto: CreateProductDto) {
        const product = { id: Date.now().toString(), ...createProductDto, quantity: 0 };
        this.products.push(product);
        return product;
    }

    // Listar todos os produtos
    findAll(search?: string) {
        if (search) {
            return this.products.filter((product) =>
                product.name.toLowerCase().includes(search.toLowerCase()),
            );
        }
        return this.products;
    }

    // Buscar um produto por ID
    findOne(id: string) {
        const product = this.products.find((p) => p.id === id);
        if (!product) {
            throw new NotFoundException('Produto não encontrado');
        }
        return product;
    }

    // Atualizar o estoque de um produto
    updateStock(id: string, quantity: number) {
        const product = this.findOne(id);
        product.quantity += quantity;

        // Registrar movimentação
        this.movements.push({
            productId: id,
            quantity,
            type: quantity > 0 ? 'entry' : 'exit',
            date: new Date(),
        });

        return product;
    }

    // Obter produtos com estoque baixo
    getLowStockProducts() {
        return this.products.filter(
            (product) => product.minimumStock && product.quantity < product.minimumStock,
        );
    }

    // Gerar relatório de movimentações
    getProductReport(id: string) {
        this.findOne(id); // Verificar se o produto existe
        return this.movements.filter((movement) => movement.productId === id);
    }
}
