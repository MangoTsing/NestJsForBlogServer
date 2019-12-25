import * as mongoose from 'mongoose';

export const MyblogtxtSchema = new mongoose.Schema({
  title: String,
  author: String,
  tags: String,
  summary: String,
  content: String,
  coverImg: String,
  star: Number,
  count: Number
},
{ collection: 'myblogtxt', versionKey: false });
