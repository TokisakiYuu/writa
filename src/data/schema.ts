import { GraphQLSchema } from "graphql";
import query from "./queries/root";
import mutation from "./mutations";

export const schema = new GraphQLSchema({ query, mutation });
