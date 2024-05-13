import axios from "axios";

export const saveTrip = async (trip) => {
  return await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/trip`,
    trip
  );
};