"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
let ProductsService = class ProductsService {
    constructor() {
        this.products = [];
        this.movements = [];
    }
    create(createProductDto) {
        const product = { id: Date.now().toString(), ...createProductDto, quantity: 0 };
        this.products.push(product);
        return product;
    }
    findAll(search) {
        if (search) {
            return this.products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));
        }
        return this.products;
    }
    findOne(id) {
        const product = this.products.find((p) => p.id === id);
        if (!product) {
            throw new common_1.NotFoundException('Produto não encontrado');
        }
        return product;
    }
    updateStock(id, quantity) {
        const product = this.findOne(id);
        product.quantity += quantity;
        this.movements.push({
            productId: id,
            quantity,
            type: quantity > 0 ? 'entry' : 'exit',
            date: new Date(),
        });
        return product;
    }
    getLowStockProducts() {
        return this.products.filter((product) => product.minimumStock && product.quantity < product.minimumStock);
    }
    getProductReport(id) {
        this.findOne(id);
        return this.movements.filter((movement) => movement.productId === id);
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
//# sourceMappingURL=products.service.js.map