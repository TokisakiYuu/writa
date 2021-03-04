import {
  GraphQLObjectType,
  GraphQLNonNull,
  // GraphQLString,
  // GraphQL,
} from "graphql";
import ArticleType from "./Article";
import FoodEnum from "./Food";

const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "顶级API",
  fields: {
    "article": {
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
    }
  }
});

export default QueryType;
