import { BaseEntity } from '../../shared/entities';
import { Currency } from "./currency.entity";
import { LogWallet } from "./logWallet.entity";
export declare class Wallet extends BaseEntity {
    id: number;
    sum: number;
    currencyId: number;
    currency: Currency;
    logs: LogWallet;
    user: number;
    userId: number;
    toJSON(): {
        id: number;
        sum: number;
        currency: Currency;
        userId: number;
        user: number;
        logs: LogWallet;
        currencyId: number;
        createdAt: string;
    };
}
