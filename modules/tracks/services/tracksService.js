import axios from 'axios';

const TRACKS_API_URL = 'http://localhost:3006/v1/tracks';

export const getTracks = async () =>
  await axios.get(TRACKS_API_URL);

export const getTrackById = async (id) =>
  await axios.get(`${TRACKS_API_URL}/${id}`);

export const createTrack = async (track, token) =>
  await axios.post(TRACKS_API_URL, track, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const deleteTrack = async (id, token) =>
  await axios.delete(`${TRACKS_API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const updateTrack = async (id, track, token) =>
  await axios.put(`${TRACKS_API_URL}/${id}`, track, {
    headers: { Authorization: `Bearer ${token}` },
  });
