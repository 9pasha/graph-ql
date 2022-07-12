import { gql } from 'apollo-server-express';

export const jwtTokenTypeDefinition = gql`
    type JwtToken {
        jwt: String!
    }
    
    type Query {
        jwt(
            password: String!,
            email: String!
        ): JwtToken
    }
`;
