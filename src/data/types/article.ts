import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";
import DateType from "./Date";

const NonNullString = GraphQLNonNull(GraphQLString);

export default new GraphQLObjectType({
  name: "Article",
  fields: {
    "title": {
      type: NonNullString,
      description: "文章标题，获取文章必须同时获取标题",
      resolve: (source) => {
        return `今天你吃${source.title}了吗?`;
      }
    },
    "content": {
      type: NonNullString,
      description: "文章内容，你怕也没见过没有内容的文章吧",
      resolve: (source) => {
        return `${source.content}很好吃`;
      }
    },
    "createdAt": {
      type: DateType,
      resolve: () => {
        return new Date();
      }
    },
    "updateAt": {
      type: DateType,
      resolve: () => {
        return new Date();
      }
    }
  }
});
