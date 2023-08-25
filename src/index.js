const express = require("express");
const  { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require('@graphql-tools/schema');
const postSchema = require('./schema/post');
const resolvers = require('./resolvers');
require('./db/database');

const schema = makeExecutableSchema({
  typeDefs: postSchema,
  resolvers: resolvers,
});

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});