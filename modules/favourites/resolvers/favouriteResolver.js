import {getFavourites} from "../services/favouriteService.js";

export const favouriteResolver = {
    async favourites() {
        const { data } = await getFavourites();

        return data.items;
    }
}