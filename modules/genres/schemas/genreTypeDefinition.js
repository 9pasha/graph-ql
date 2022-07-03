import {gql} from "apollo-server-express";

export const genreTypeDefinition = gql` 
    type Genre {
        id: ID!
        name: String
        description: String
        country: String
        year: Int
    }
    
    type Query {
        genres: [Genre]
        genre(id: ID!): Genre
    }
    
    type Mutation {
        createGenre(
            name: String,
            description: String,
            country: String,
            year: Int
        ): Genre
        deleteGenre(id: ID!): DeletedItem
        updateGenre(
            currentGenreId: ID!,
            id: ID!,
            name: String,
            description: String,
            country: String,
            year: Int
        ): Genre
    }
`;