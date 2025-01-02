import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {
  @ApiProperty({ example: 'Article Title' })
  readonly title!: string;

  @ApiProperty({ example: '<p>Article content in HTML</p>' })
  readonly content!: string;

  @ApiProperty({ example: '2023-01-01T00:00:00.000Z' })
  readonly publicationDate!: Date;

  @ApiProperty({ example: 'base64encodedimage' })
  readonly image!: string;

  @ApiProperty({ example: 'Meta Title' })
  readonly metaTitle!: string;

  @ApiProperty({ example: 'Meta Description' })
  readonly metaDescription!: string;

  @ApiProperty({ example: 'https://example.com' })
  readonly metaCanonical!: string;

  @ApiProperty({ example: 'https://example.com/image.jpg' })
  readonly metaOgImage!: string;

  @ApiProperty({ example: 'H1 Heading' })
  readonly h1!: string;
}
