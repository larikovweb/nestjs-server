import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Article extends Document {
  @Prop({ required: true })
  title!: string;

  @Prop({ required: true })
  content!: string;

  @Prop({ required: true })
  publicationDate!: Date;

  @Prop({ required: true })
  image!: string; // Base64 encoded image or image URL

  @Prop({ required: true })
  metaTitle!: string;

  @Prop({ required: true })
  metaDescription!: string;

  @Prop({ required: true })
  metaCanonical!: string;

  @Prop({ required: true })
  metaOgImage!: string;

  @Prop({ required: true })
  h1!: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
