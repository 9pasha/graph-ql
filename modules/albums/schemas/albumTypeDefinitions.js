import { gql } from 'apollo-server-express';

export const albumTypeDefinitions = gql`    
    type Album {
        id: ID
        name: String
        released: Int
        artists: [ID!]
        bands: [ID!]
        tracks: [ID!]
        genres: [ID!]
        image: String
    }
    
    input AlbumInput {
        name: String
        released: Int
        artists: [ID!]
        bands: [ID!]
        tracks: [ID!]
        genres: [ID!]
        image: String
    }
    
    type Query {
        albums: [Album]
        album(id: ID!): Album
    }
    
    type Mutation {
        createAlbum(
            name: String,
            released: Int,
            artists: [ID!],
            bands: [ID!],
            tracks: [ID!],
            genres: [ID!],
            image: String
        ): Album
        deleteAlbum(id: ID!): DeletedItem
        updateAlbum(
            currentId: ID!,
            name: String,
            released: Int,
            artists: [ID!],
            bands: [ID!],
            tracks: [ID!],
            genres: [ID!],
            image: String
        ): Album
    }
`;
