"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const create_product_dto_1 = require("./dto/create-product.dto");
const auth_guard_1 = require("../auth/auth.guard");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    createProduct(createProductDto, req) {
        const user = req['user'];
        console.log('Usuário autenticado:', user);
        return this.productsService.create(createProductDto);
    }
    findAll(req, search) {
        const user = req['user'];
        console.log('Usuário autenticado:', user);
        return this.productsService.findAll(search);
    }
    findOne(id, req) {
        const user = req['user'];
        console.log('Usuário autenticado:', user);
        return this.productsService.findOne(id);
    }
    updateStock(id, quantity, req) {
        const user = req['user'];
        console.log('Usuário autenticado:', user);
        return this.productsService.updateStock(id, quantity);
    }
    getLowStockProducts(req) {
        const user = req['user'];
        console.log('Usuário autenticado:', user);
        return this.productsService.getLowStockProducts();
    }
    getProductReport(id, req) {
        const user = req['user'];
        console.log('Usuário autenticado:', user);
        return this.productsService.getProductReport(id);
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto, Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id/movement'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('quantity')),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "updateStock", null);
__decorate([
    (0, common_1.Get)('low-stock'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getLowStockProducts", null);
__decorate([
    (0, common_1.Get)(':id/report'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProductReport", null);
exports.ProductsController = ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map