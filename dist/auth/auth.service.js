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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const staff_service_1 = require("../staff/staff.service");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(staffService, jwtService) {
        this.staffService = staffService;
        this.jwtService = jwtService;
    }
    async signIn(username, pass) {
        console.log(`Usuário: ${username}, Senha: ${pass}`);
        const staff = await this.staffService.findOne(username);
        if (!staff) {
            console.log(`pesquisa no staffService ${staff} nome inserido ${username}`);
            throw new common_1.UnauthorizedException('Credenciais inválidas');
        }
        console.log(`pesquisa no staffService ${staff.password} senha inserido ${pass} `);
        if (staff.password !== pass) {
            throw new common_1.UnauthorizedException('Credenciais inválidas');
        }
        const payload = { sub: staff.idClient, username: staff.username };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [staff_service_1.StaffService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map