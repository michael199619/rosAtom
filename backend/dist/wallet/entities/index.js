"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency = exports.Wallet = exports.LogWallet = exports.WalletEntities = void 0;
const logWallet_entity_1 = require("./logWallet.entity");
Object.defineProperty(exports, "LogWallet", { enumerable: true, get: function () { return logWallet_entity_1.LogWallet; } });
const wallet_entity_1 = require("./wallet.entity");
Object.defineProperty(exports, "Wallet", { enumerable: true, get: function () { return wallet_entity_1.Wallet; } });
const currency_entity_1 = require("./currency.entity");
Object.defineProperty(exports, "Currency", { enumerable: true, get: function () { return currency_entity_1.Currency; } });
exports.WalletEntities = [logWallet_entity_1.LogWallet, wallet_entity_1.Wallet, currency_entity_1.Currency];
//# sourceMappingURL=index.js.map