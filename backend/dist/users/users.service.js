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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const typeorm_3 = require("typeorm");
const entities_1 = require("./entities");
let UsersService = class UsersService {
    constructor(uRepo, entityManager) {
        this.uRepo = uRepo;
        this.entityManager = entityManager;
    }
    async removeUserById(id) {
        await this.uRepo.delete(id);
    }
    async getUsers() {
        const users = await this.uRepo.find();
        return users;
    }
    async getUserById(id) {
        const user = await this.entityManager.createQueryBuilder(entities_1.User, 'user')
            .where('user.id = :id', { id })
            .getOne();
        return user;
    }
    async createUser(user) {
        return await this.uRepo.save(user);
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(entities_1.User)),
    __param(1, typeorm_1.InjectEntityManager()),
    __metadata("design:paramtypes", [typeorm_3.Repository,
        typeorm_2.EntityManager])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map