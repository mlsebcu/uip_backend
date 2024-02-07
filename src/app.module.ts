import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EncryptionService } from './encryption/encryption.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { DatabaseService } from './constants/database.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [AppController, UsersController ],
  providers: [AppService, EncryptionService, UsersService, DatabaseService],
})
export class AppModule {
  // constructor(){
  //   connection.connect();
  // }
}
