import axios from "axios";

const GENRES_API_URL = "http://localhost:3001/v1/genres";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmJmMDMyNzJlYTVkODJiZTExMDE4MzYiLCJmaXJzdE5hbWUiOiJmaXJzdCBuYW1lIiwibGFzdE5hbWUiOiJsYXN0IG5hbWUiLCJlbWFpbCI6Im1ldDkxMjlAZ21haWwuY29tIiwiaWF0IjoxNjU2Njg1NTQyfQ.xRJhUVzcRiVnG6ZaIW77hA7J5HdqFfr5FrOo5nCx8tM"

export const getGenres = async () => {
    return await axios.get(GENRES_API_URL);
};

export const getGenreById = async (id) => {
    return await axios.get(`${GENRES_API_URL}/${id}`);
}

export const createGenre = async (genre) => {
    return await axios.post(
        GENRES_API_URL,
        genre,
        {
            headers: { "Authorization": `Bearer ${token}` }
    });
};

export const deleteGenre = async (id) => {
    return await axios.delete(`${GENRES_API_URL}/${id}`, {
        headers: { "Authorization": `Bearer ${token}` }
    });
};

export const updateGenre = async (id, genre) => {
    return await axios.put(`${GENRES_API_URL}/${id}`, genre, {
        headers: { "Authorization": `Bearer ${token}` }
    });
};