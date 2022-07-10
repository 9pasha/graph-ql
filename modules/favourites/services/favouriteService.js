import axios from 'axios';
import 'dotenv/config';

const { FAVOURITES_API_URL } = process.env;

export const getFavourites = async () => await axios.get(FAVOURITES_API_URL);

export const addTrackToFavourites = async (track, token) =>
  await axios.put(`${FAVOURITES_API_URL}/add`, track, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addBandToFavourites = async (band, token) =>
  await axios.put(`${FAVOURITES_API_URL}/add`, band, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addArtistToFavourites = async (artist, token) =>
  await axios.put(`${FAVOURITES_API_URL}/add`, artist, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addGenreToFavourites = async (genre, token) =>
  await axios.put(`${FAVOURITES_API_URL}/add`, genre, {
    headers: { Authorization: `Bearer ${token}` },
  });
