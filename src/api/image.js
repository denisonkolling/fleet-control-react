import axios from "axios";

export const uploadFile = async (file) => {
  return await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/api/v2/image`,
    file,
    {
      "Content-Type": "multipart/form-data",
    }
  );
};
