import axios from 'axios';

const GENRES_API_URL = 'http://localhost:3001/v1/genres';

export const getGenres = async () => await axios.get(GENRES_API_URL);

export const getGenreById = async (id) => await axios.get(`${GENRES_API_URL}/${id}`);

export const createGenre = async (genre, token) => await axios.post(
  GENRES_API_URL,
  genre,
  {
    headers: { Authorization: `Bearer ${token}` },
  },
);

export const deleteGenre = async (id, token) => await axios.delete(`${GENRES_API_URL}/${id}`, {
  headers: { Authorization: `Bearer ${token}` },
});

export const updateGenre = async (id, genre, token) => await axios.put(`${GENRES_API_URL}/${id}`, genre, {
  headers: { Authorization: `Bearer ${token}` },
});
