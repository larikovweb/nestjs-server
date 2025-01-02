import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserRole = 'USER' | 'PARTNER' | 'ADMIN' | 'MODERATOR';

@Schema()
export class User extends Document {
  @Prop({ required: true })
  email!: string;

  @Prop({ required: true })
  password!: string;

  @Prop({ required: true, enum: ['USER', 'PARTNER', 'ADMIN', 'MODERATOR'] })
  role!: UserRole;

  @Prop({ required: true, default: Date.now })
  regDate!: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
