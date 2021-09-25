"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.app = void 0;
const config_1 = require("@nestjs/config");
const entities_1 = require("../users/entities");
exports.app = config_1.registerAs('app', () => ({
    port: process.env.APP_PORT
}));
exports.db = config_1.registerAs('db', () => ({
    type: 'postgres',
    port: process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    migrationsRun: false,
    entities: [
        ...entities_1.UsersEntities
    ],
    logging: true,
    synchronize: true,
}));
//# sourceMappingURL=config.service.js.map