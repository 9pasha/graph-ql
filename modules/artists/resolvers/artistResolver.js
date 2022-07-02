import {getArtists} from "../services/artistService.js";

export const artistResolver = {
    async artists() {
        const { data } = await getArtists();

        return data.items;
    }
}