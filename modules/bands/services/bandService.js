import axios from "axios";

const BANDS_API_URL = "http://localhost:3003/v1/bands";

export const getBands = async () => {
  return await axios.get(BANDS_API_URL);
};

export const getBandById = async (id) => {
  return await axios.get(`${BANDS_API_URL}/${id}`);
};

export const createBand = async (band, token) => {
  return await axios.post(BANDS_API_URL, band, {
    headers: { "Authorization": `Bearer ${token}` }
  });
};

export const deleteBand = async (id, token) => {
  return await axios.delete(`${BANDS_API_URL}/${id}`, {
    headers: { "Authorization": `Bearer ${token}` }
  });
};

export const updateBand = async (currentId, band, token) => {
  return await axios.put(`${BANDS_API_URL}/${currentId}`, band, {
    headers: { "Authorization": `Bearer ${token}` }
  });
};