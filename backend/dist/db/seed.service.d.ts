import { EntityManager } from 'typeorm';
export declare class SeedService {
    private entityManager;
    constructor(entityManager: EntityManager);
    onModuleInit(): Promise<boolean>;
}
