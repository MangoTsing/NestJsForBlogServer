import { Document } from 'mongoose';
export interface MyBlogTxt extends Document {
  readonly title: string;
  readonly author: string;
  readonly tags: string;
  readonly summary: string;
  readonly content: string;
  readonly coverImg: string;
  readonly star: number;
  readonly count: number;
}
