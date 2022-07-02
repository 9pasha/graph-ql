import axios from "axios";

const GENRES_API_URL = "http://localhost:3001/v1/genres";

export const getGenres = async () => {
    return await axios.get(GENRES_API_URL);
}
// createGenre: [Genre]
export const createGenre = async () => {

};
// deleteGenre: Boolean
export const deleteGenre = async () => {

};
// updateGenre: [Genre]
export const updateGenre = async () => {

};
