import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { albumTypeDefinitions } from './albums/schemas/albumTypeDefinitions';
import { albumResolver } from './albums/resolvers/albumResolver';
import { userTypeDefinitions } from './users/schemas/userTypeDefinitions';
import { userMutationsResolver, userQueryResolver } from './users/resolvers/userResolver';
import { genreTypeDefinition } from './genres/schemas/genreTypeDefinition';
import { genreResolverMutations, genreResolverQueries } from './genres/resolvers/genreResolver';
import { artistTypeDefinition } from './artists/schemas/artistTypeDefinition';
import { artistMutationResolver, artistQueryResolver } from './artists/resolvers/artistResolver';
import { bandTypeDefinition } from './bands/schemas/bandTypeDefinition';
import { bandMutationResolver, bandQueryResolver } from './bands/resolvers/bandResolver';
import { trackTypeDefinition } from './tracks/schemas/trackTypeDefinition';
import { trackMutationResolver, trackQueryResolver } from './tracks/resolvers/trackResolver';
import { favouriteTypeDefinition } from './favourites/schemas/favouriteTypeDefinition';
import { deletedItemTypeDefinition } from './externals/schemas/deletedItemTypeDefinition';
import { jwtTokenTypeDefinition } from './jwt/schemas/jwtTokenTypeDefinition';

const app = express();

const resolvers = {
  Query: {
    ...albumResolver,
    ...userQueryResolver,
    ...genreResolverQueries,
    ...artistQueryResolver,
    ...bandQueryResolver,
    ...trackQueryResolver,
  },
  Mutation: {
    ...genreResolverMutations,
    ...userMutationsResolver,
    ...bandMutationResolver,
    ...artistMutationResolver,
    ...trackMutationResolver,
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

const PORT = 8080;

await server.start();

server.applyMiddleware({ app });

app.listen({ port: PORT }, () => {
  console.log(`Server running on port ${PORT}`);
});
