import { gql } from 'apollo-server-express';

export const bandTypeDefinition = gql`
    type Member {
        artist: String
        instrument: String
        years: [String]
    }
    
    input MemberInput {
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
        genres: [ID!]
    }
    
    input BandInput {
        name: String
        origin: String
        members: [MemberInput]
        website: String
        genres: [ID!]
    }
    
    type Query {
        bands: [Band]!
        band(id: ID!): Band
    }
    
    type Mutation {
        createBand(
            name: String,
            origin: String,
            members: [MemberInput],
            website: String,
            genres: [ID!]
        ): Band
        deleteBand(id: ID!): DeletedItem
        updateBand(
            currentId: ID!,
            name: String,
            origin: String,
            members: [MemberInput],
            website: String,
            genres: [ID!]
        ): Band
    }
`;
