import { ApiProperty } from '@nestjs/swagger';

export class IdDto {
  @ApiProperty({ example: '1', description: 'The ID of the user' })
  id!: string;
}
