import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductsService {
    private products;
    private movements;
    create(createProductDto: CreateProductDto): {
        quantity: number;
        name: string;
        description: string;
        minimumStock: number;
        location: string;
        id: string;
    };
    findAll(search?: string): any[];
    findOne(id: string): any;
    updateStock(id: string, quantity: number): any;
    getLowStockProducts(): any[];
    getProductReport(id: string): any[];
}
