import axios from "axios";

const TRACKS_API_URL = "http://localhost:3006/v1/tracks";

export const getTracks = async () => {
    return await axios.get(TRACKS_API_URL);
};
