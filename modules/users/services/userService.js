import axios from 'axios';
import 'dotenv/config';

const { USERS_API_URL } = process.env;

export const getUserById = async (id) =>
  await axios.get(`${USERS_API_URL}/${id}`);

export const registerUser = async (user) =>
  await axios.post(`${USERS_API_URL}/register`, user);
