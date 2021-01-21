import mongoose from "mongoose";
import { MONGODB_URI } from "../src/util/secrets";
import ArticleModel, { ArticleDocument } from "../src/models/Article";

// (async () => {
//   await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
//   const doc: ArticleDocument = await ArticleModel.findOne({ title: "Do you like your room ?" });
//   console.log(doc);
// })();
