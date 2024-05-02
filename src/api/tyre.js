import axios from "axios";

export const saveTyre = async (tyre) => {
  return await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/api/v2/tyre`,
    tyre
  );
};