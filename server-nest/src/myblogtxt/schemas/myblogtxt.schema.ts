import * as mongoose from 'mongoose';

export const MyblogtxtSchema = new mongoose.Schema({
  title: String,
  author: String,
  tags: Object,
  summary: String
},
{ collection: 'myblogtxt', versionKey: false });
