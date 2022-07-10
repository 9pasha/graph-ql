import { gql } from 'apollo-server-express';

export const artistTypeDefinition = gql`
    type Artist {
        id: ID!
        firstName: String
        secondName: String
        middleName: String
        birthDate: String
        birthPlace: String
        country: String
        bands: [Band]
        instruments: [String]
    }
    
    input ArtistInput {
        firstName: String
        secondName: String
        middleName: String
        birthDate: String
        birthPlace: String
        country: String
        bands: [BandInput]
        instruments: [String]
    }
    
    type Query {
        artists: [Artist]!
        artist(id: ID!): Artist
    }
    
    type Mutation {
        createArtist(
          firstName: String,
          secondName: String,
          middleName: String,
          birthDate: String,
          birthPlace: String,
          country: String,
          bands: [ID],
          instruments: [String]!
        ): Artist
        deleteArtist(id: ID!): DeletedItem
        updateArtist(
            currentId: ID!,
            firstName: String,
            secondName: String,
            middleName: String,
            birthDate: String,
            birthPlace: String,
            country: String,
            bands: [ID],
            instruments: [String]!
        ): Artist
    }
`;
