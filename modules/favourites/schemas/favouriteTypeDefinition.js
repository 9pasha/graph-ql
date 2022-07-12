import { gql } from 'apollo-server-express';

export const favouriteTypeDefinition = gql`
    type Favourites {
        id: ID!
        userId: ID
        bands: [Band]
        genres: [Genre]
        artists: [Artist]
        tracks: [Track]
    }
    
    type Query {
        favourites: [Favourites]!
    }
    
    type Mutation {
        addTrackToFavourites(trackItem: FavouriteItemInput!): Track,
        addBandToFavourites(bandItem: FavouriteItemInput!): Band,
        addArtistToFavourites(artistItem: FavouriteItemInput!): Artist,
        addGenreToFavourites(genreItem: FavouriteItemInput!): Genre
    }
`;
