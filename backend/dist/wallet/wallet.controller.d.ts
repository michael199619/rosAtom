import { WalletService } from './wallet.service';
import { WalletDto } from './dto/wallet.dto';
import { CurrencyDto } from './dto/currency.dto';
import { TransferDto } from './dto/transfer.dto';
export declare class WalletController {
    private walletsService;
    constructor(walletsService: WalletService);
    createCurrency(currency: CurrencyDto): Promise<{
        id: number;
    }>;
    getCurrencyes(): Promise<import("./entities").Currency[]>;
    getWallets(): Promise<import("./entities").Wallet[]>;
    getWalletsByIdUser(id: number): Promise<import("./entities").Wallet[]>;
    createWallet(wallet: WalletDto): Promise<{
        id: number;
    }>;
    transfer(transfer: TransferDto): Promise<import("./entities").LogWallet>;
}
