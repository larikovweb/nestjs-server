import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { databaseProviders } from './database.providers';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost/nest')],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
