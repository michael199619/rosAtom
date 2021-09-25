import { UsersService } from './users.service';
import { UserDTO } from './dto/user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<any>;
    getUserById(id: number): Promise<any>;
    createUser(user: UserDTO): Promise<{
        id: any;
    }>;
    removeUserById(id: number): Promise<void>;
}
