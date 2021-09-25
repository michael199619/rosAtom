import { BaseEntity } from '../../shared/entities';
export declare class User extends BaseEntity {
    id: number;
    firstName: string;
    lastName: string;
    toJSON(): {
        id: number;
        firstName: string;
        lastName: string;
        createdAt: string;
    };
}
