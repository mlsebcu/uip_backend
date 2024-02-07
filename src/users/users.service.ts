  // import { Injectable } from '@nestjs/common';
  // import { EncryptionService } from 'src/encryption/encryption.service';
  // import { DatabaseService } from 'src/constants/database.service';

  // @Injectable()
  // export class UsersService {
  //   private users = [];

  //   constructor(private readonly encryptionService: EncryptionService, private readonly databaseService: DatabaseService,) {}

  //   async registerUser(username: string, password: string): Promise<void> {
  //     const hashedPassword = await this.encryptionService.hashPassword(password);
  
  //     try {
  //       await this.databaseService.connect(); // Asegúrate de que la conexión se establezca antes de la consulta
  
  //       const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  //       const values = [username, hashedPassword];
  //       await this.databaseService.query(query, values);
  
  //       console.log('User registered successfully');
  //     } catch (error) {
  //       console.error(`Failed to register user: ${error.message}`);
  //       throw error;
  //     } finally {
  //       await this.databaseService.disconnect();
  //     }
  //   }
  

  //   async loginUser(username: string, password: string): Promise<boolean> {
  //     const user = this.users.find((u) => u.username === username);
  //     if (!user) {
  //       return false;
  //     }

  //     return this.encryptionService.comparePassword(password, user.password);
  //   }
  // }

  import { Injectable } from '@nestjs/common';

  export type User = any;
  @Injectable()
  export class UsersService {
    private readonly users = [
      {
        userId: 1,
        username: 'mseb',
        password: '1234',
      },
      {
        userId: 2,
        username: 'admin',
        password: 'admin',
      },
    ];
  
    async findOne(username: string): Promise<User | undefined> {
      return this.users.find(user => user.username === username);
    }
  }