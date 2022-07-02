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
        createGenre: [Genre]
        deleteGenre: Boolean
        updateGenre: [Genre]
    }
`;