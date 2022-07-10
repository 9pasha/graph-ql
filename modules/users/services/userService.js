import axios from 'axios';

const USERS_API_URL = 'http://localhost:3004/v1/users';

export const getUsers = async () => await axios.get(USERS_API_URL);

export const registerUser = async (user) => await axios.post(`${USERS_API_URL}/register`, user);
