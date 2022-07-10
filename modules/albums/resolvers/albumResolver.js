import { getAlbums } from '../services/albums.js';

export const albumResolver = {
  async albums() {
    const { data } = await getAlbums();
    return data.items;
  },
};
