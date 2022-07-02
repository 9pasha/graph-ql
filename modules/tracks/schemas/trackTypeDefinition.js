import {gql} from "apollo-server-express";

export const trackTypeDefinition = gql`
    type Track {
        id: ID!
        title: String
        albums: String
        bands: [Band]
        duration: Int
        released: Int
        genres: [Genre]
    }
    
    type Query {
        tracks: [Track]!
    }
`;