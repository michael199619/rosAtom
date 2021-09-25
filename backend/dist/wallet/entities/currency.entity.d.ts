import { BaseEntity } from '../../shared/entities';
export declare class Currency extends BaseEntity {
    id: number;
    name: string;
    toJSON(): {
        id: number;
        name: string;
        createdAt: string;
    };
}
