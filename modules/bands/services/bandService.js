import axios from "axios";

const BANDS_API_URL = "http://localhost:3003/v1/bands";

export const getBands = async () => {
  return await axios.get(BANDS_API_URL);
}