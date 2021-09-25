import { UsersService } from './users.service';
import { UserDTO } from './dto/user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<import("./entities").User[]>;
    getUserById(id: number): Promise<import("./entities").User>;
    createUser(user: UserDTO): Promise<{
        id: number;
    }>;
    removeUserById(id: number): Promise<void>;
}
