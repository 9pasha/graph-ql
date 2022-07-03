import axios from "axios";

const ARTISTS_API_URL = "http://localhost:3002/v1/artists";

export const getArtists = async () => {
    return await axios.get(ARTISTS_API_URL);
};

export const getArtistById = async (id) => {
    return await axios.get(`${ARTISTS_API_URL}/${id}`);
};
// Fix problem with birthDate field
export const createArtist = async (artist, token) => {
    return await axios.post(ARTISTS_API_URL, artist, {
        headers: { "Authorization": `Bearer ${token}` }
    });
};

export const deleteArtist = async (id, token) => {
    return await axios.delete(`${ARTISTS_API_URL}/${id}`, {
        headers: { "Authorization": `Bearer ${token}` }
    });
};

export const updateArtist = async (currentId, artist, token) => {
    return await axios.put(
        `${ARTISTS_API_URL}/${currentId}`,
        artist,
        {
            headers: { "Authorization": `Bearer ${token}`
        }
    });
};
