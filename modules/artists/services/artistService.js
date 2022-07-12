import axios from 'axios';
import 'dotenv/config';

const { ARTISTS_API_URL } = process.env;

export const getArtists = async () => await axios.get(ARTISTS_API_URL);

export const getArtistById = async (id) => await axios.get(`${ARTISTS_API_URL}/${id}`);
// Fix problem with birthDate field
export const createArtist = async (artist, token) => await axios.post(ARTISTS_API_URL, artist, {
  headers: { Authorization: `Bearer ${token}` },
});

export const deleteArtist = async (id, token) => await axios.delete(`${ARTISTS_API_URL}/${id}`, {
  headers: { Authorization: `Bearer ${token}` },
});

export const updateArtist = async (currentId, artist, token) => await axios.put(
  `${ARTISTS_API_URL}/${currentId}`,
  artist,
  {
    headers: { Authorization: `Bearer ${token}` },
  },
);
