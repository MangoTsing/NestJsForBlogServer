import * as mongoose from 'mongoose';

export const BlogSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});