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
exports.WalletService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const typeorm_3 = require("typeorm");
const entities_1 = require("./entities");
const config_1 = require("@nestjs/config");
let WalletService = class WalletService {
    constructor(wRepo, cRepo, lRepo, entityManager, configService) {
        this.wRepo = wRepo;
        this.cRepo = cRepo;
        this.lRepo = lRepo;
        this.entityManager = entityManager;
        this.configService = configService;
    }
    async getWalletsByIdUser(userId) {
        const wallets = await this.entityManager.createQueryBuilder(entities_1.Wallet, 'wallet')
            .innerJoinAndMapOne('wallet.currency', 'currency', 'currency', 'wallet.currencyId = currency.id')
            .leftJoinAndMapMany('wallet.logs', 'logwallet', 'logwallet', 'logwallet.walletFromId = wallet.id or logwallet.walletToId = wallet.id')
            .where('wallet.userId = :userId', { userId })
            .orderBy('wallet.id')
            .getMany();
        return wallets;
    }
    async createWallet(wallet) {
        return await this.wRepo.save(wallet);
    }
    async getWallets() {
        return await this.wRepo.find();
    }
    async createCurrency(currency) {
        const res = await this.cRepo.findOne({
            where: {
                name: currency.name
            }
        });
        if (res) {
            throw new common_1.BadRequestException(`"${currency.name}" is exists`);
        }
        return await this.cRepo.save(currency);
    }
    async getCurrencyes() {
        return await this.cRepo.find();
    }
    async transfer({ sum, walletFromId, walletToId }) {
        const wallets = await this.wRepo.find({
            id: typeorm_2.In([walletFromId, walletToId])
        });
        if (wallets.length !== 2 || wallets[0].currencyId !== wallets[1].currencyId) {
            throw new common_1.BadRequestException();
        }
        const walletTo = wallets.find(({ id }) => id === walletToId);
        const walletFrom = wallets.find(({ id }) => id === walletFromId);
        const commission = sum / 100 * this.configService.get('app.commission');
        walletFrom.sum = walletFrom.sum - commission - sum;
        walletTo.sum = walletTo.sum + sum;
        if (walletFrom.sum < sum) {
            throw new common_1.ForbiddenException('sum');
        }
        let status = true;
        const queryRunner = await this.entityManager.connection.createQueryRunner();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.save([walletFrom, walletTo]);
            await queryRunner.commitTransaction();
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
            status = false;
        }
        finally {
            await queryRunner.release();
        }
        try {
            return await this.lRepo.save({ walletToId, walletFromId, sum, commission, status });
        }
        catch (err) {
            throw new Error(err);
        }
    }
};
WalletService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(entities_1.Wallet)),
    __param(1, typeorm_1.InjectRepository(entities_1.Currency)),
    __param(2, typeorm_1.InjectRepository(entities_1.LogWallet)),
    __param(3, typeorm_1.InjectEntityManager()),
    __metadata("design:paramtypes", [typeorm_3.Repository,
        typeorm_3.Repository,
        typeorm_3.Repository,
        typeorm_2.EntityManager,
        config_1.ConfigService])
], WalletService);
exports.WalletService = WalletService;
//# sourceMappingURL=wallet.service.js.map