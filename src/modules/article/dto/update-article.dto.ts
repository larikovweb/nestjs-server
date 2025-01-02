import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateArticleDto } from './create-article.dto';

export class UpdateArticleDto extends PartialType(CreateArticleDto) {
  @ApiProperty({ example: '1', description: 'The ID of the article' })
  id!: string;
}
