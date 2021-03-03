import { GraphQLScalarType } from "graphql";
import { Kind } from "graphql/language";

const typeDefs = `#graphql

scalar Date

type Article {
  title: String!
  content: String!
  createdAt: Date
  updateAt: Date
}

`;

const resolverMap  = {
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    parseValue(value) {
      return new Date(value);
    },
    serialize(value) {
      return new Date(value);
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10);
      }
      return null;
    }
  })
};

export default { typeDefs, resolverMap };
