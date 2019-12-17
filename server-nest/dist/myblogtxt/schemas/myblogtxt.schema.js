"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.MyblogtxtSchema = new mongoose.Schema({
    title: String,
    author: String,
    tags: Object,
    summary: String
}, { collection: 'myblogtxt', versionKey: false });
//# sourceMappingURL=myblogtxt.schema.js.map