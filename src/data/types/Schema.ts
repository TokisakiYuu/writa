import {
  GraphQLSchema
} from "graphql";

import QueryType from "./Query";
const schema = new GraphQLSchema({
  query: QueryType,
  mutation: null,
  description: "大表"
});

export default schema;
