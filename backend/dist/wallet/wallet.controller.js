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
exports.WalletController = void 0;
const common_1 = require("@nestjs/common");
const wallet_service_1 = require("./wallet.service");
const wallet_dto_1 = require("./dto/wallet.dto");
const currency_dto_1 = require("./dto/currency.dto");
const transfer_dto_1 = require("./dto/transfer.dto");
let WalletController = class WalletController {
    constructor(walletsService) {
        this.walletsService = walletsService;
    }
    async createCurrency(currency) {
        const { id } = await this.walletsService.createCurrency(currency);
        return { id };
    }
    async getCurrencyes() {
        return await this.walletsService.getCurrencyes();
    }
    async getWallets() {
        return await this.walletsService.getWallets();
    }
    async getWalletsByIdUser(id) {
        return await this.walletsService.getWalletsByIdUser(id);
    }
    async createWallet(wallet) {
        const { id } = await this.walletsService.createWallet(wallet);
        return { id };
    }
    async transfer(transfer) {
        return await this.walletsService.transfer(transfer);
    }
};
__decorate([
    common_1.Post('currencyes'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [currency_dto_1.CurrencyDto]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "createCurrency", null);
__decorate([
    common_1.Get('currencyes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "getCurrencyes", null);
__decorate([
    common_1.Get(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "getWallets", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "getWalletsByIdUser", null);
__decorate([
    common_1.Post(''),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [wallet_dto_1.WalletDto]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "createWallet", null);
__decorate([
    common_1.Post('transfer'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transfer_dto_1.TransferDto]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "transfer", null);
WalletController = __decorate([
    common_1.Controller('api/wallets'),
    __metadata("design:paramtypes", [wallet_service_1.WalletService])
], WalletController);
exports.WalletController = WalletController;
//# sourceMappingURL=wallet.controller.js.map