import {
    IsString
} from 'class-validator';

import {Expose, Transform, Type} from 'class-transformer';

export class UserDTO {
    @IsString()
    @Expose()
    readonly firstName: string;

    @IsString()
    @Expose()
    readonly lastName: string;
}