import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Request } from 'express';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    createProduct(createProductDto: CreateProductDto, req: Request): {
        quantity: number;
        name: string;
        description: string;
        minimumStock: number;
        location: string;
        id: string;
    };
    findAll(req: Request, search?: string): any[];
    findOne(id: string, req: Request): any;
    updateStock(id: string, quantity: number, req: Request): any;
    getLowStockProducts(req: Request): any[];
    getProductReport(id: string, req: Request): any[];
}
