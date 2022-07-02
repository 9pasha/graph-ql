import {gql} from "apollo-server-express";

export const bandTypeDefinition = gql`
    type Member {
        artist: String
        instrument: String
        years: [String]
    }
    
    type Band {
        id: ID!
        name: String
        origin: String
        members: [Member]
        website: String
        genres: String
    }
    
    type Query {
        bands: [Band]!
    }
`;