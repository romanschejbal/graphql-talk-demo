import express from 'express';
import expressGraphQL from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';
import cors from 'cors';

import typeDefs from './schema.graphql';
import resolvers from './resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();

app.use(cors());
app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(3000, () =>
  console.log('GraphiQL running at: http://localhost:3000/graphql')
);
