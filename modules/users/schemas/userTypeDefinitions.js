import {gql} from "apollo-server-express";

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
        users: [User]!
    }
`;