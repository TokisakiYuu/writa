import {
  GraphQLEnumType
} from "graphql";

export default new GraphQLEnumType({
  name: "Food",
  description: "食物",
  values: {
    "A": {
      description: "花菜",
      value: "花菜",
    },
    "B": {
      description: "芒果",
      value: "芒果"
    }
  }
});
