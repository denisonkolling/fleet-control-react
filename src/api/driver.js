import axios from "axios";

export const saveDriver = async (driver) => {
  return await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/api/v2/driver`,
    driver
  );
};
