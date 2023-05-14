const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    description: [{
      type: String,
      required: true,
    }],
  },
  { timestamps: true }
);

const Article =
  mongoose.models.Article || mongoose.model('Article', ArticleSchema);
export default Article;
