import { gql } from 'apollo-server-express';

export const deletedItemTypeDefinition = gql`
    type DeletedItem {
        acknowledged: Boolean
        deletedCount: Int
    }
    
    type FavouriteItem {
        type: String!
        id: ID!
    }
    
    input FavouriteItemInput {
        type: String!
        id: ID!
    }
`;
