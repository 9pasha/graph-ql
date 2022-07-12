import { gql } from 'apollo-server-express';

export const trackTypeDefinition = gql`
    type Track {
        id: ID!
        title: String!
        artists: [ID!]
        album: Album
        bands: [ID!]
        duration: Int
        released: Int
        genres: [ID!]
    }
    
    input TrackInput {
        title: String!
        artists: [ID!]
        album: AlbumInput
        bands: [ID!]
        duration: Int
        released: Int
        genres: [ID!]
    }
    
    type Query {
        tracks: [Track]!
        track(id: ID!): Track
    }
    
    type Mutation {
        createTrack(
            title: String!,
            artists: [ID!],
            album: AlbumInput,
            bands: [ID!],
            duration: Int,
            released: Int,
            genres: [ID!]
        ): Track 
        deleteTrack(
            id: ID!
        ): DeletedItem
        updateTrack(
            currentId: ID!,
            title: String!,
            artists: [ID!],
            album: AlbumInput,
            bands: [ID!],
            duration: Int,
            released: Int,
            genres: [ID!]
        ): Track
    }
`;
