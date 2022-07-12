import {
  createArtist, deleteArtist, getArtistById, getArtists, updateArtist,
} from '../services/artistService.js';

export const artistQueryResolver = {
  async artists() {
    let artists = null;
    const { data } = await getArtists();

    artists = data.items;

    artists.forEach((artist) => {
      // eslint-disable-next-line no-param-reassign
      artist.id = artist._id;
      // eslint-disable-next-line no-param-reassign
      delete artist._id;
    });

    return artists;
  },

  async artist(_, { id }) {
    let artist = null;

    try {
      const { data } = await getArtistById(id);

      artist = data;
      artist.id = artist._id;
      delete artist._id;
    } catch (error) {
      console.log(error);
    }

    return artist;
  },
};

export const artistMutationResolver = {
  async createArtist(_, {
    firstName,
    secondName,
    middleName,
    birthDate,
    birthPlace,
    country,
    bands,
    instruments,
  }, context) {
    let createdArtist = null;

    try {
      const { data } = await createArtist({
        firstName,
        secondName,
        middleName,
        birthDate,
        birthPlace,
        country,
        bands,
        instruments,
      }, context.token);

      createdArtist = data;
      createdArtist.id = createdArtist._id;
      delete createdArtist._id;
    } catch (error) {
      console.log(error);
    }

    return createdArtist;
  },

  async deleteArtist(_, { id }, context) {
    let deletedItem = null;

    try {
      const { data } = await deleteArtist(id, context.token);

      deletedItem = data;
    } catch (error) {
      console.log(error);
    }

    return deletedItem;
  },

  async updateArtist(_, {
    currentId,
    firstName,
    secondName,
    middleName,
    birthDate,
    birthPlace,
    country,
    bands,
    instruments,
  }, context) {
    let updatedArtist = null;

    try {
      const { data } = await updateArtist(
        currentId,
        {
          currentId,
          firstName,
          secondName,
          middleName,
          birthDate,
          birthPlace,
          country,
          bands,
          instruments,
        },
        context.token,
      );

      updatedArtist = data;
      updatedArtist.id = updatedArtist._id;
      delete updatedArtist._id;
    } catch (error) {
      console.log(error);
    }

    return updatedArtist;
  },
};
