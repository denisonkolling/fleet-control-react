import axios from "axios";

export const saveVehicle = async (vehicle) => {
  return await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/vehicle`,
    vehicle
  );
};
