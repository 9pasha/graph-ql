import {
  createTrack, deleteTrack, getTrackById, getTracks, updateTrack,
} from '../services/tracksService.js';

export const trackQueryResolver = {
  async tracks() {
    let tracks = null;

    try {
      const { data } = await getTracks();

      tracks = data.items;

      tracks.forEach((el) => {
        // eslint-disable-next-line no-param-reassign
        el.id = el._id;
        // eslint-disable-next-line no-param-reassign
        delete el._id;
      });
    } catch (error) {
      console.log(error);
    }

    return tracks;
  },

  async track(_, { id }) {
    let track = null;

    try {
      const { data } = await getTrackById(id);

      track = data;
      track.id = track._id;
      delete track._id;
    } catch (error) {
      console.log(error);
    }

    return track;
  },
};

export const trackMutationResolver = {
  // Fix creating Track
  async createTrack(_, {
    title,
    album,
    artists,
    bands,
    duration,
    released,
    genres,
  }, context) {
    let createdTrack = null;

    try {
      const { data } = await createTrack({
        title,
        album,
        artists,
        bands,
        duration,
        released,
        genres,
      }, context.token);

      createdTrack = data;
      createdTrack.id = createdTrack._id;
      delete createdTrack._id;
    } catch (error) {
      console.log(error);
    }

    return createdTrack;
  },

  async deleteTrack(_, { id }, context) {
    let deletedItem = null;

    try {
      const { data } = await deleteTrack(id, context.token);

      deletedItem = data;
    } catch (error) {
      console.log(error);
    }

    return deletedItem;
  },

  async updateTrack(_, {
    currentId,
    title,
    album,
    artists,
    bands,
    duration,
    released,
    genres,
  }, context) {
    let updatedTrack = null;

    try {
      const { data } = await updateTrack(currentId, {
        title,
        album,
        artists,
        bands,
        duration,
        released,
        genres,
      }, context.token);

      updatedTrack = data;
      updatedTrack.id = updatedTrack._id;
      delete updateTrack._id;
    } catch (error) {
      console.log(error);
    }

    return updatedTrack;
  },
};
