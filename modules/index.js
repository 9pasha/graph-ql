import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { albumTypeDefinitions } from './albums/schemas/albumTypeDefinitions.js';
import { albumMutationResolver, albumQueryResolver } from './albums/resolvers/albumQueryResolver.js';
import { userTypeDefinitions } from './users/schemas/userTypeDefinitions.js';
import { userMutationsResolver, userQueryResolver } from './users/resolvers/userResolver.js';
import { genreTypeDefinition } from './genres/schemas/genreTypeDefinition.js';
import { genreMutationResolver, genreQueryResolver } from './genres/resolvers/genreResolver.js';
import { artistTypeDefinition } from './artists/schemas/artistTypeDefinition.js';
import { artistMutationResolver, artistQueryResolver } from './artists/resolvers/artistResolver.js';
import { bandTypeDefinition } from './bands/schemas/bandTypeDefinition.js';
import { bandMutationResolver, bandQueryResolver } from './bands/resolvers/bandResolver.js';
import { trackTypeDefinition } from './tracks/schemas/trackTypeDefinition.js';
import { trackMutationResolver, trackQueryResolver } from './tracks/resolvers/trackResolver.js';
import { favouriteTypeDefinition } from './favourites/schemas/favouriteTypeDefinition.js';
import { deletedItemTypeDefinition } from './externals/schemas/deletedItemTypeDefinition.js';
import { jwtTokenTypeDefinition } from './jwt/schemas/jwtTokenTypeDefinition.js';
import { jwtQueryResolver } from './jwt/resolvers/jwtResolver.js';
import { favouriteMutationResolver, favouriteQueryResolver } from './favourites/resolvers/favouriteQueryResolver.js';
import 'dotenv/config';

const app = express();

const resolvers = {
  Query: {
    ...albumQueryResolver,
    ...userQueryResolver,
    ...genreQueryResolver,
    ...artistQueryResolver,
    ...bandQueryResolver,
    ...trackQueryResolver,
    ...jwtQueryResolver,
    ...favouriteQueryResolver,
  },
  Mutation: {
    ...genreMutationResolver,
    ...userMutationsResolver,
    ...bandMutationResolver,
    ...artistMutationResolver,
    ...trackMutationResolver,
    ...favouriteMutationResolver,
    ...albumMutationResolver,
  },
};

const server = new ApolloServer({
  typeDefs: [
    albumTypeDefinitions,
    userTypeDefinitions,
    genreTypeDefinition,
    artistTypeDefinition,
    bandTypeDefinition,
    trackTypeDefinition,
    favouriteTypeDefinition,
    deletedItemTypeDefinition,
    jwtTokenTypeDefinition,
  ],
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  context: () => {
    // Note: This example uses the `req` argument to access headers,
    // but the arguments received by `context` vary by integration.
    // This means they vary for Express, Koa, Lambda, etc.
    //
    // To find out the correct arguments for a specific integration,
    // see https://www.apollographql.com/docs/apollo-server/api/apollo-server/#middleware-specific-context-fields

    // Get the user token from the headers.
    // const token = req.headers.authorization || '';

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmJmMDMyNzJlYTVkODJiZTExMDE4MzYiLCJmaXJzdE5hbWUiOiJmaXJzdCBuYW1lIiwibGFzdE5hbWUiOiJsYXN0IG5hbWUiLCJlbWFpbCI6Im1ldDkxMjlAZ21haWwuY29tIiwiaWF0IjoxNjU2Njg1NTQyfQ.xRJhUVzcRiVnG6ZaIW77hA7J5HdqFfr5FrOo5nCx8tM';

    // Try to retrieve a user with the token
    // const user = getUser(token);

    // Add the user to the context
    return { token };
  },
});

const PORT = process.env.GRAPH_QL_SERVER_PORT || 8080;

await server.start();

server.applyMiddleware({ app });

app.listen({ port: PORT }, () => {
  console.log(`Server running on port ${PORT}`);
});
