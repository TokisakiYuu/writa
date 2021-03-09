import { GraphQLFieldConfig, GraphQLObjectType, GraphQLNonNull, GraphQLString } from "graphql";
import type Context from "../context";
import DateType from "../types/date";

export const title: GraphQLFieldConfig<{title: string}, Context> = {
  type: GraphQLNonNull(GraphQLString),
  description: "文章标题",
  resolve(source, args, context) {
    return `今天你吃${source.title}了吗?`;
  }
};

export const content: GraphQLFieldConfig<{content: string}, Context> = {
  type: GraphQLNonNull(GraphQLString),
  description: "文章内容",
  resolve: (source, args, context) => {
    return `${source.content}很好吃`;
  }
};

export const createdAt: GraphQLFieldConfig<unknown, Context> = {
  type: DateType,
  resolve() {
    return new Date();
  }
};

export const updateAt: GraphQLFieldConfig<unknown, Context> = {
  type: DateType,
  resolve() {
    return new Date(Date.now() + 60 * 1000);
  }
};

export default new GraphQLObjectType({
  name: "Article",
  description: "文章",
  fields: {
    title,
    content,
    createdAt,
    updateAt
  },
});
