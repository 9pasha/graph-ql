import { gql } from 'apollo-server-express';

export const trackTypeDefinition = gql`
    type Track {
        id: ID!
        title: String!
        artists: [Artist]
        album: Album
        bands: [Band]
        duration: Int
        released: Int
        genres: [Genre]
    }
    
    input TrackInput {
        title: String!
        artists: [ArtistInput]
        album: AlbumInput
        bands: [BandInput]
        duration: Int
        released: Int
        genres: [GenreInput]
    }
    
    type Query {
        tracks: [Track]!
        track(id: ID!): Track
    }
    
    type Mutation {
        createTrack(
            title: String!,
            artists: [ArtistInput],
            album: AlbumInput,
            bands: [BandInput],
            duration: Int,
            released: Int,
            genres: [GenreInput]
        ): Track 
        deleteTrack(
            id: ID!
        ): DeletedItem
        updateTrack(
            currentId: ID!,
            title: String!,
            artists: [ArtistInput],
            album: AlbumInput,
            bands: [BandInput],
            duration: Int,
            released: Int,
            genres: [GenreInput]
        ): Track
    }
`;
