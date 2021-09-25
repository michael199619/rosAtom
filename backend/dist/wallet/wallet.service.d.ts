import { EntityManager } from 'typeorm';
import { Repository } from 'typeorm';
import { Currency, LogWallet, Wallet } from './entities';
import { WalletDto } from './dto/wallet.dto';
import { CurrencyDto } from './dto/currency.dto';
import { ConfigService } from '@nestjs/config';
export declare class WalletService {
    private readonly wRepo;
    private readonly cRepo;
    private readonly lRepo;
    private entityManager;
    private configService;
    constructor(wRepo: Repository<Wallet>, cRepo: Repository<Currency>, lRepo: Repository<LogWallet>, entityManager: EntityManager, configService: ConfigService);
    getWalletsByIdUser(userId: number): Promise<Wallet[]>;
    createWallet(wallet: WalletDto): Promise<Wallet>;
    getWallets(): Promise<Wallet[]>;
    createCurrency(currency: CurrencyDto): Promise<Currency>;
    getCurrencyes(): Promise<Currency[]>;
    transfer({ sum, walletFromId, walletToId }: {
        sum: any;
        walletFromId: any;
        walletToId: any;
    }): Promise<LogWallet>;
}
