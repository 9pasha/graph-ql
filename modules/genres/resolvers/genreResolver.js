import {
    createGenre,
    deleteGenre, getGenreById,
    getGenres,
    updateGenre
} from "../services/genreService.js";

export const genreResolverQueries = {
    async genres() {
        let genres = [];

        try {
            const { data } = await getGenres();

            genres = data.items;
        } catch (error) {
            console.log(error);
        }

        return genres;
    },

    async genre(_, { id }) {
        let genre = null;

        try {
            const { data } = await getGenreById(id);

            data.id = data._id;
            delete data._id;

            genre = data;
        } catch (error) {
            console.log(error);
        }

        return genre;
    }
};

export const genreResolverMutations = {
    async createGenre(_, {
        name,
        description,
        country,
        year
    }) {
        let createdGenre = null;

        try {
            const { data } = await createGenre({
                name,
                description,
                country,
                year
            });

            createdGenre = data;
            createdGenre = data;
            createdGenre.id = data+
                _id;
            delete createdGenre._id;
        } catch (error) {
            console.log(error);
        }

        return createdGenre;
    },

    async deleteGenre(_, { id }) {
        let deletedItem = null;

        try {
            const { data } = await deleteGenre(id);

            deletedItem = data;
        } catch (error) {
            console.log(error);
        }

        console.log('Deleted item =', deletedItem)

        return deletedItem;
    },

    async updateGenre(_, { currentGenreId, id, name, description, country, year }) {
        let updatedGenre = null;

        try {
            const { data } = await updateGenre(
                currentGenreId,
                {
                    _id: id,
                    name,
                    description,
                    country,
                    year
                });

            data.id = data._id;
            delete data._id;

            updatedGenre = data;
        } catch (error) {
            console.log(error);
        }

        return updatedGenre;
    }
};