import * as mongoose from 'mongoose';
import { Provider } from '@nestjs/common';

export const databaseProviders: Provider[] = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> => {
      const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/nest';
      if (!uri) {
        throw new Error('MONGODB_URI is not defined');
      }
      return mongoose.connect(uri);
    },
  },
];
