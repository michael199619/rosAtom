import { BaseEntity } from '../../shared/entities';
import { Wallet } from './wallet.entity';
export declare class LogWallet extends BaseEntity {
    id: number;
    walletFrom: Wallet;
    walletToId: number;
    walletTo: Wallet;
    walletFromId: number;
    sum: number;
    commission: number;
    status: boolean;
    toJSON(): {
        id: number;
        sum: number;
        status: boolean;
        walletFrom: Wallet;
        walletTo: Wallet;
        walletFromId: number;
        walletToId: number;
        commission: number;
        createdAt: string;
    };
}
