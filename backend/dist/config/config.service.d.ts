export declare const app: (() => {
    port: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost;
export declare const db: (() => {
    type: string;
    port: string;
    username: string;
    database: string;
    password: string;
    host: string;
    migrationsRun: boolean;
    entities: typeof import("../users/entities").User[];
    logging: boolean;
    synchronize: boolean;
}) & import("@nestjs/config").ConfigFactoryKeyHost;
