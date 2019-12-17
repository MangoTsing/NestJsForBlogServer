import { Document } from 'mongoose';
export interface MyBlogTxt extends Document {
    readonly title: string;
    readonly author: string;
    readonly tags: object;
    readonly summary: string;
}
