import axios from "axios";

export const saveTyre = async (tyre) => {
  return await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/tyre`,
    tyre
  );
};

export const saveTyreReading = async (tyreReading) => {
  return await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/tyre-reading`,
    tyreReading
  );
};