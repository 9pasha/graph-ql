import {
  createGenre,
  deleteGenre, getGenreById,
  getGenres,
  updateGenre,
} from '../services/genreService.js';

export const genreQueryResolver = {
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
  },
};

export const genreMutationResolver = {
  async createGenre(_, {
    name,
    description,
    country,
    year,
  }, context) {
    let createdGenre = null;

    try {
      const { data } = await createGenre({
        name,
        description,
        country,
        year,
      }, context.token);

      createdGenre = data;
      createdGenre.id = data._id;
      delete createdGenre._id;
    } catch (error) {
      console.log(error);
    }

    return createdGenre;
  },

  async deleteGenre(_, { id }, context) {
    let deletedItem = null;

    try {
      const { data } = await deleteGenre(id, context.token);

      deletedItem = data;
    } catch (error) {
      console.log(error);
    }

    return deletedItem;
  },

  async updateGenre(
    _,
    {
      currentGenreId, id, name, description, country, year,
    },
    context,
  ) {
    let updatedGenre = null;

    try {
      const { data } = await updateGenre(
        currentGenreId,
        {
          _id: id,
          name,
          description,
          country,
          year,
        },
        context.token,
      );

      data.id = data._id;
      delete data._id;

      updatedGenre = data;
    } catch (error) {
      console.log(error);
    }

    return updatedGenre;
  },
};
