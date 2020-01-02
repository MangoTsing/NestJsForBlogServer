import { Document } from 'mongoose';
export interface Tag extends Document {
  readonly name: string;
}
