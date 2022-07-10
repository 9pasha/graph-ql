import { gql } from 'apollo-server-express';

export const userTypeDefinitions = gql`
    type User {
        id: ID!
        firstName: String
        secondName: String
        middleName: String
        password: String!
        email: String!
    }
   
    type Query {
        user(id: ID!): User
    }
    
    type Mutation {
        register(
            firstName: String!,
            middleName: String!,
            lastName: String!,
            password: String!,
            email: String!,
            favouriteArtistIds: [String]!
        ): User
    }
`;
