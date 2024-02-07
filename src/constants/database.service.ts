// database.service.ts

import { Injectable } from '@nestjs/common';
import * as mysql from 'mysql2/promise';

@Injectable()
export class DatabaseService {
  private connection;

  async connect(): Promise<void> {
    const config = {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    };

    this.connection = await mysql.createConnection(config);
  }

  async disconnect(): Promise<void> {
    if (this.connection) {
      await this.connection.end();
    }
  }

  async query(sql: string, values?: any[]): Promise<any> {
    try {
      if (!this.connection) {
        throw new Error('Database connection is not established.');
      }

      const [rows] = await this.connection.execute(sql, values);
      return rows;
    } catch (error) {
      console.error('Database query error:', error);
      throw error;
    }
  }
}