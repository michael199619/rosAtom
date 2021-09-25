import { EntityManager } from 'typeorm';
import { Repository } from 'typeorm';
import { User } from './entities';
import { UserDTO } from './dto/user.dto';
export declare class UsersService {
    private readonly uRepo;
    private entityManager;
    constructor(uRepo: Repository<User>, entityManager: EntityManager);
    removeUserById(id: number): Promise<void>;
    getUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User>;
    createUser(user: UserDTO): Promise<User>;
}
