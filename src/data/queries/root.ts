import { GraphQLFieldConfig, GraphQLObjectType, GraphQLNonNull } from "graphql";
import type Context from "../context";
import ArticleType from "../queries/article";
import FoodEnum from "../types/food";

export const article: GraphQLFieldConfig<unknown, Context> = {
  type: GraphQLNonNull(ArticleType),
  description: "文章",
  args: {
    foodName: {
      type: GraphQLNonNull(FoodEnum),
      defaultValue: FoodEnum.getValue("A").value,
      description: "食物名"
    }
  },
  resolve: async (source, args) => {
    // 这里返回的结果会被放在子类字段的每一个resolve函数的第一个参数
    return {
      title: `${args.foodName}(食物名)`,
      content: args.foodName
    };
  }
};

export default new GraphQLObjectType({
  name: "Root",
  description: "The top-level API",
  fields: {
    article
  }
});
