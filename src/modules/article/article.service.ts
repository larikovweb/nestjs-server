import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './article.schema';

@Injectable()
export class ArticleService {
  constructor(@InjectModel(Article.name) private articleModel: Model<Article>) {}

  async create(createArticleDto: CreateArticleDto): Promise<Article> {
    const createdArticle = new this.articleModel(createArticleDto);
    return createdArticle.save();
  }

  async findAllWithPagination(
    limit: number,
    offset: number,
  ): Promise<{ articles: Article[]; total: number }> {
    const articles = await this.articleModel.find().skip(offset).limit(limit).exec();
    const total = await this.articleModel.countDocuments().exec();
    return { articles, total };
  }

  async findOne(id: string): Promise<Article | null> {
    return this.articleModel.findById(id).exec();
  }

  async update(updateArticleDto: UpdateArticleDto): Promise<Article | null> {
    const { id, ...updateData } = updateArticleDto;
    return this.articleModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
  }

  async remove(id: string): Promise<Article | null> {
    return this.articleModel.findByIdAndRemove(id).exec();
  }
}
