import {gql} from "apollo-server-express";

export const deletedItemTypeDefinition = gql`
    type DeletedItem {
        acknowledged: Boolean
        deletedCount: Int
    }
`;