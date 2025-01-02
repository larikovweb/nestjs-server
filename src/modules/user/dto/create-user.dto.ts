import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../user.schema';

export class CreateUserDto {
  @ApiProperty({ example: 'john.doe@example.com' })
  readonly email!: string;

  @ApiProperty({ example: 'password123' })
  readonly password!: string;

  @ApiProperty({ example: 'USER', enum: ['USER', 'PARTNER', 'ADMIN', 'MODERATOR'] })
  readonly role!: UserRole;

  @ApiProperty({ example: new Date().toISOString() })
  readonly regDate!: Date;
}
