import { gql } from 'apollo-server-express';

export const genreTypeDefinition = gql` 
    type Genre {
        id: ID!
        name: String
        description: String
        country: String
        year: Int
    }
    
    input GenreInput {
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
            name: String,
            description: String,
            country: String,
            year: Int
        ): Genre
    }
`;
