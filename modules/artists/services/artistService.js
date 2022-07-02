import axios from "axios";

const ARTISTS_API_URL = "http://localhost:3002/v1/artists";

export const getArtists = async () => {
    return await axios.get(ARTISTS_API_URL);
};
