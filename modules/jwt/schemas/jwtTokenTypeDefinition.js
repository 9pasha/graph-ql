import {gql} from "apollo-server-express";

export const jwtTokenTypeDefinition = gql`
    type JwtToken {
        jwt: String!
    }
`;