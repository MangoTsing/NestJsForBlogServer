"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.BlogSchema = new mongoose.Schema({
    title: String,
    author: String,
    tags: Object,
    summary: String
});
//# sourceMappingURL=blog.schema.js.map