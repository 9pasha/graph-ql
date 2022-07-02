import axios from "axios";

const USERS_API_URL = "http://localhost:3004/v1/users";

export const getUsers = async () => {
    return await axios.get(USERS_API_URL);
};