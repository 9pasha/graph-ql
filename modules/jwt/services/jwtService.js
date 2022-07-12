import axios from 'axios';
import 'dotenv/config';

const { JWT_API_URL } = process.env;

export const loginUser = async (userCredentials) =>
  await axios.post(JWT_API_URL, userCredentials);
