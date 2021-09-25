import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntities } from './entities';
import { UsersService } from './users.service';

import { UsersController } from './users.controller';

@Module({
  // imports: [
  //   TypeOrmModule.forFeature([...UsersEntities]),
  // ],
  providers: [],
  controllers: [UsersController],
  exports: [],
})
export class UsersModule {}
