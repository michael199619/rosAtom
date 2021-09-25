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
exports.Wallet = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("../../shared/entities");
const entities_2 = require("../../users/entities");
let Wallet = class Wallet extends entities_1.BaseEntity {
    toJSON() {
        return {
            id: this.id,
            sum: this.sum,
            currency: this.currency,
            userId: this.userId,
            user: this.user,
            logs: this.logs,
            currencyId: this.currencyId,
            createdAt: this.createdAt
        };
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Wallet.prototype, "id", void 0);
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
], Wallet.prototype, "sum", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int', unsigned: true, nullable: false
    }),
    __metadata("design:type", Number)
], Wallet.prototype, "currencyId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => entities_2.User, {
        onDelete: 'CASCADE'
    }),
    __metadata("design:type", Number)
], Wallet.prototype, "user", void 0);
__decorate([
    typeorm_1.Column({
        type: 'int', unsigned: true, nullable: false
    }),
    __metadata("design:type", Number)
], Wallet.prototype, "userId", void 0);
Wallet = __decorate([
    typeorm_1.Entity('wallet')
], Wallet);
exports.Wallet = Wallet;
//# sourceMappingURL=wallet.entity.js.map