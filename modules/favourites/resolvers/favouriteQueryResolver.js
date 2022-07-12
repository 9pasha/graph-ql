import {
  addArtistToFavourites,
  addBandToFavourites, addGenreToFavourites,
  addTrackToFavourites,
  getFavourites,
} from '../services/favouriteService.js';

export const favouriteQueryResolver = {
  async favourites(_, item, context) {
    if (!context.token) {
      return null;
    }

    let favourites = null;
    const { data } = await getFavourites(context.token);

    favourites = data.items;

    favourites.forEach((favourite) => {
      // eslint-disable-next-line no-param-reassign
      favourite.id = favourite._id;
      delete favourites._id;
    });

    return favourites;
  },
};

export const favouriteMutationResolver = {
  async addTrackToFavourites(_, { type, id }, context) {
    let track = null;

    try {
      const { data } = await addTrackToFavourites({ type, id }, context.token);

      track = data;
      track.id = track._id;
      delete track._id;
    } catch (error) {
      console.log(error);
    }

    return track;
  },

  async addBandToFavourites(_, { type, id }, context) {
    let band = null;

    try {
      const { data } = await addBandToFavourites({ type, id }, context.token);

      band = data;
      band.id = band._id;
      delete band._id;
    } catch (error) {
      console.log(error);
    }

    return band;
  },

  async addArtistToFavourites(_, { type, id }, context) {
    let artist = null;

    try {
      const { data } = await addArtistToFavourites({ type, id }, context.token);

      artist = data;
      artist.id = artist._id;
      delete artist._id;
    } catch (error) {
      console.log(error);
    }

    return artist;
  },

  async addGenreToFavourites(_, { type, id }, context) {
    let genre = null;

    try {
      const { data } = await addGenreToFavourites({ type, id }, context.token);

      genre = data;
      genre.id = genre._id;
      delete genre._id;
    } catch (error) {
      console.log(error);
    }

    return genre;
  },
};
