import axios from 'axios';

const ALBUMS_API_URL = 'http://localhost:3005/v1/albums';

export const getAlbums = async () => await axios.get(ALBUMS_API_URL);
