import { GraphQLObjectType, GraphQLFieldConfig, GraphQLBoolean } from "graphql";
import type Context from "../context";

export const signIn: GraphQLFieldConfig<unknown, Context> = {
  type: GraphQLBoolean,
  description: "登录",
  resolve(source, args, context) {
    return true;
  }
};

export default new GraphQLObjectType({
  name: "Mutation",
  description: "updates API",
  fields: {
    signIn
  }
});
