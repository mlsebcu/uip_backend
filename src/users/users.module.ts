// import { Module } from '@nestjs/common';
// import { UsersService } from './users.service';
// import { EncryptionService } from 'src/encryption/encryption.service';
// import { UsersController } from './users.controller';
// import { DatabaseService } from 'src/constants/database.service';

// @Module({
//   providers: [UsersService, EncryptionService, DatabaseService],
//   controllers: [UsersController]
// })
// export class UsersModule {}


import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
