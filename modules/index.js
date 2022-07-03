import {ApolloServer} from 'apollo-server-express';
import express from "express";
import {albumTypeDefinitions} from "./albums/schemas/albumTypeDefinitions.js";
import {albumResolver} from "./albums/resolvers/albumResolver.js";
import {userTypeDefinitions} from "./users/schemas/userTypeDefinitions.js";
import {userMutationsResolver, userResolver} from "./users/resolvers/userResolver.js";
import {genreTypeDefinition} from "./genres/schemas/genreTypeDefinition.js";
import {genreResolverMutations, genreResolverQueries} from "./genres/resolvers/genreResolver.js";
import {artistTypeDefinition} from "./artists/schemas/artistTypeDefinition.js";
import {artistResolver} from "./artists/resolvers/artistResolver.js";
import {bandTypeDefinition} from "./bands/schemas/bandTypeDefinition.js";
import {bandResolver} from "./bands/resolvers/bandResolver.js";
import {trackTypeDefinition} from "./tracks/schemas/trackTypeDefinition.js";
import {trackResolver} from "./tracks/resolvers/trackResolver.js";
import {favouriteTypeDefinition} from "./favourites/schemas/favouriteTypeDefinition.js";
import {deletedItemTypeDefinition} from "./externals/schemas/deletedItemTypeDefinition.js";
import {jwtTokenTypeDefinition} from "./jwt/schemas/jwtTokenTypeDefinition.js";

const app = express();

const resolvers = {
    Query: {
        ...albumResolver,
        ...userResolver,
        ...genreResolverQueries,
        ...artistResolver,
        ...bandResolver,
        ...trackResolver
    },
    Mutation: {
        ...genreResolverMutations,
        ...userMutationsResolver
    }
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
        jwtTokenTypeDefinition
    ],
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    context: ({ req }) => {
        // Note: This example uses the `req` argument to access headers,
        // but the arguments received by `context` vary by integration.
        // This means they vary for Express, Koa, Lambda, etc.
        //
        // To find out the correct arguments for a specific integration,
        // see https://www.apollographql.com/docs/apollo-server/api/apollo-server/#middleware-specific-context-fields

        // Get the user token from the headers.
        const token = req.headers.authorization || '';

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
})