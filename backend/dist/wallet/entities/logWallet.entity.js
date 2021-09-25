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
exports.LogWallet = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("../../shared/entities");
let LogWallet = class LogWallet extends entities_1.BaseEntity {
    toJSON() {
        return {
            id: this.id,
            sum: this.sum,
            status: this.status,
            walletFrom: this.walletFrom,
            walletTo: this.walletTo,
            walletFromId: this.walletFromId,
            walletToId: this.walletToId,
            commission: this.commission,
            createdAt: this.createdAt
        };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], LogWallet.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int', unsigned: true, nullable: false
    }),
    __metadata("design:type", Number)
], LogWallet.prototype, "walletToId", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int', unsigned: true, nullable: false
    }),
    __metadata("design:type", Number)
], LogWallet.prototype, "walletFromId", void 0);
__decorate([
    typeorm_1.Column({
        type: 'numeric',
        default: 0,
        nullable: false,
        transformer: {
            to: value => value,
            from: value => +value
        }
    }),
    __metadata("design:type", Number)
], LogWallet.prototype, "sum", void 0);
__decorate([
    typeorm_1.Column({
        type: 'numeric',
        default: 0,
        nullable: false,
        transformer: {
            to: value => value,
            from: value => +value
        }
    }),
    __metadata("design:type", Number)
], LogWallet.prototype, "commission", void 0);
__decorate([
    typeorm_1.Column({
        type: 'boolean', nullable: false, default: false
    }),
    __metadata("design:type", Boolean)
], LogWallet.prototype, "status", void 0);
LogWallet = __decorate([
    typeorm_1.Entity('logwallet')
], LogWallet);
exports.LogWallet = LogWallet;
//# sourceMappingURL=logWallet.entity.js.map