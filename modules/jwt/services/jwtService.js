import axios from 'axios';

const JWT_API_URL = 'http://localhost:3004/v1/users/login';

export const loginUser = async (userCredentials) => await axios.post(JWT_API_URL, userCredentials);
