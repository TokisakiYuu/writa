import mongoose, { Schema, Document } from "mongoose";

export type ArticleObject = {
  title: string;
  content: string;
  createdAt: Date;
  updateAt: Date;
};
export type ArticleDocument = Document & ArticleObject;

const articleSchema = new Schema<ArticleDocument>({
  title: String,
  content: String,
  createdAt: Date,
  updateAt: Date,
});

export default mongoose.model("article", articleSchema);

/**
 * schema methods
 */
articleSchema.methods.log = async function() {
  console.log(this.toObject());
};
