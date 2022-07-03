import axios from "axios";

const USERS_API_URL = "http://localhost:3004/v1/users";

export const getUsers = async () => {
    return await axios.get(USERS_API_URL);
};

export const registerUser = async (user) => {
    console.log('Registering JSON User =', user)
    return await axios.post(`${USERS_API_URL}/register`, user);
};