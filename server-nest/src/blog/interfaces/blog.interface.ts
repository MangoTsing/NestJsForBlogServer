import { Document } from 'mongoose';
export interface Blog extends Document {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}
