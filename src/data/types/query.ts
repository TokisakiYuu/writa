const typeDefs = `#graphql

type Query {
  serverName: String!
  article(id: String): Article
}

`;

const resolverMap = {

};

export default { typeDefs, resolverMap };
