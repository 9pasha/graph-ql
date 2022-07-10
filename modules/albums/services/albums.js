import axios from 'axios';
import 'dotenv/config';

const { ALBUMS_API_URL } = process.env;

export const getAlbums = async () => await axios.get(ALBUMS_API_URL);

export const getAlbumById = async (id) => await axios.get(`${ALBUMS_API_URL}/${id}`);

export const createAlbum = async (album, token) =>
  await axios.post(ALBUMS_API_URL, album, { headers: { Authorization: `Bearer ${token}` } });

export const deleteAlbum = async (id, token) =>
  await axios.delete(
    `{ALBUMS_API_URL}/${id}`,
    { headers: { Authorization: `Bearer ${token}` } },
  );
