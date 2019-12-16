import * as mongoose from 'mongoose';

export const BlogSchema = new mongoose.Schema({
  title: String,
  author: String,
  tags: Object,
  summary: String
});
