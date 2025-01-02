import { Controller, Post, Get, Put, Delete, Body, Query } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Article } from './article.schema';

@ApiTags('articles')
@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create article' })
  @ApiResponse({
    status: 201,
    description: 'The article has been successfully created.',
    type: Article,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async createArticle(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto);
  }

  @Get('pagination')
  @ApiOperation({ summary: 'Get all articles with pagination' })
  @ApiResponse({
    status: 200,
    description: 'The articles have been successfully retrieved.',
    schema: {
      example: {
        summary: 'Example of articles with pagination',
        value: {
          articles: [
            {
              _id: '1',
              title: 'Article Title',
              content: '<p>Article content in HTML</p>',
              publicationDate: '2023-01-01T00:00:00.000Z',
              image: 'base64encodedimage',
              metaTitle: 'Meta Title',
              metaDescription: 'Meta Description',
              metaCanonical: 'https://example.com',
              metaOgImage: 'https://example.com/image.jpg',
              h1: 'H1 Heading',
            },
          ],
          total: 1,
        },
      },
    },
  })
  async getAllArticles(@Query('limit') limit: number, @Query('offset') offset: number) {
    return this.articleService.findAllWithPagination(limit, offset);
  }

  @Post('findId')
  @ApiOperation({ summary: 'Get article by ID' })
  @ApiResponse({
    status: 200,
    description: 'The article has been successfully retrieved.',
    type: Article,
    examples: {
      example: {
        summary: 'Example of article by ID',
        value: {
          _id: '1',
          title: 'Article Title',
          content: '<p>Article content in HTML</p>',
          publicationDate: '2023-01-01T00:00:00.000Z',
          image: 'base64encodedimage',
          metaTitle: 'Meta Title',
          metaDescription: 'Meta Description',
          metaCanonical: 'https://example.com',
          metaOgImage: 'https://example.com/image.jpg',
          h1: 'H1 Heading',
        },
      },
    },
  })
  @ApiResponse({ status: 404, description: 'Article not found' })
  async getArticle(@Body('id') id: string) {
    return this.articleService.findOne(id);
  }

  @Put('update')
  @ApiOperation({ summary: 'Update article' })
  @ApiResponse({
    status: 200,
    description: 'The article has been successfully updated.',
    type: Article,
    examples: {
      example: {
        summary: 'Example of updated article',
        value: {
          _id: '1',
          title: 'Updated Article Title',
          content: '<p>Updated article content in HTML</p>',
          publicationDate: '2023-01-01T00:00:00.000Z',
          image: 'base64encodedimage',
          metaTitle: 'Updated Meta Title',
          metaDescription: 'Updated Meta Description',
          metaCanonical: 'https://example.com',
          metaOgImage: 'https://example.com/image.jpg',
          h1: 'Updated H1 Heading',
        },
      },
    },
  })
  @ApiResponse({ status: 404, description: 'Article not found' })
  async updateArticle(@Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(updateArticleDto);
  }

  @Delete('delete')
  @ApiOperation({ summary: 'Delete article' })
  @ApiResponse({
    status: 200,
    description: 'The article has been successfully deleted.',
    examples: {
      example: {
        summary: 'Example of deleted article',
        value: { message: 'Article deleted successfully' },
      },
    },
  })
  @ApiResponse({ status: 404, description: 'Article not found' })
  async deleteArticle(@Body('id') id: string) {
    return this.articleService.remove(id);
  }
}
