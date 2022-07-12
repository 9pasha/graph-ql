import axios from 'axios';
import 'dotenv/config';

const { BANDS_API_URL } = process.env;

export const getBands = async () => await axios.get(BANDS_API_URL);

export const getBandById = async (id) => await axios.get(`${BANDS_API_URL}/${id}`);

export const createBand = async (band, token) => await axios.post(BANDS_API_URL, band, {
  headers: { Authorization: `Bearer ${token}` },
});

export const deleteBand = async (id, token) => await axios.delete(`${BANDS_API_URL}/${id}`, {
  headers: { Authorization: `Bearer ${token}` },
});

export const updateBand = async (currentId, band, token) => await axios.put(
  `${BANDS_API_URL}/${currentId}`,
  band,
  {
    headers: { Authorization: `Bearer ${token}` },
  },
);
