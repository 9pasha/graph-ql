import {gql} from "apollo-server-express";

export const albumTypeDefinitions = gql`    
    type Album {
        id: ID
        name: String
        released: Int
        artists: [Artist]
        bands: [Band]
        tracks: [Track]
        genres: [Genre]
        image: String
    }
    
    type Query {
        albums: [Album]
    }
`;
