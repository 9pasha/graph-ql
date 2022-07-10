import axios from 'axios';
import 'dotenv/config';

const { ALBUMS_API_URL } = process.env;

export const getAlbums = async () => await axios.get(ALBUMS_API_URL);
