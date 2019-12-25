import * as mongoose from 'mongoose';

export const MyblogtxtSchema = new mongoose.Schema({
  title: String,
  author: String,
  tags: String,
  summary: String,
  content: String,
  coverImg: String
},
{ collection: 'myblogtxt', versionKey: false });
