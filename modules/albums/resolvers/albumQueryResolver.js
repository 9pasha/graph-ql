import {
  createAlbum, deleteAlbum, getAlbumById, getAlbums, updateAlbum,
} from '../services/albums.js';

export const albumQueryResolver = {
  async albums() {
    let albums = null;
    const { data } = await getAlbums();

    albums = data.items;

    albums.forEach((album) => {
      // eslint-disable-next-line no-param-reassign
      album.id = album._id;
      // eslint-disable-next-line no-param-reassign
      delete album._id;
    });

    return albums;
  },

  async album(_, { id }) {
    let album = null;

    try {
      const { data } = await getAlbumById(id);

      album = data;
      album.id = album._id;
      delete album._id;
    } catch (error) {
      console.log(error);
    }

    return album;
  },
};

export const albumMutationResolver = {
  async createAlbum(_, {
    name,
    released,
    artists,
    bands,
    tracks,
    genres,
    image,
  }, context) {
    let createdAlbum = null;

    try {
      const { data } = await createAlbum({
        name,
        released,
        artists,
        bands,
        tracks,
        genres,
        image,
      }, context.token);

      createdAlbum = data;
      createdAlbum.id = createdAlbum._id;
      delete createdAlbum._id;
    } catch (error) {
      console.log(error);
    }

    return createdAlbum;
  },

  async deleteAlbum(_, { id }, context) {
    let deletedItem = null;

    try {
      const { data } = await deleteAlbum(id, context.token);

      deletedItem = data;
    } catch (error) {
      console.log(error);
    }

    return deletedItem;
  },

  async updateAlbum(_, {
    currentId,
    name,
    released,
    artists,
    bands,
    tracks,
    genres,
    image,
  }, context) {
    let updatedAlbum = null;

    try {
      const { data } = await updateAlbum(currentId, {
        name,
        released,
        artists,
        bands,
        tracks,
        genres,
        image,
      }, context.token);

      updatedAlbum = data;
      updatedAlbum.id = updatedAlbum._id;
      delete updatedAlbum._id;
    } catch (error) {
      console.log(error);
    }

    return updatedAlbum;
  },
};
