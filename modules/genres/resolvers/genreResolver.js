import {createGenre, deleteGenre, getGenres, updateGenre} from "../services/genreService.js";

export const genreResolver = {
    async genres() {
        const { data } = await getGenres();

        return data.items;
    },

    async createGenre() {
        const { data } = await createGenre();

        return data;
    },

    async deleteGenre() {
        const { data } = await deleteGenre();

        return data;
    },

    async updateGenre() {
        const { data } = await updateGenre();

        return data;
    }
}