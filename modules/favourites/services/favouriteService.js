import axios from "axios";

const FAVOURITES_API_URL = "http://localhost:3007/v1/favourites";

export const getFavourites = async () => {
    return await axios.get(FAVOURITES_API_URL);
};
