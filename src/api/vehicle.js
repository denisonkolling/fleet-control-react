import axios from 'axios';

export const saveVehicle = async (vehicle) => {
	try {
		return await axios.post(
			`${import.meta.env.VITE_API_BASE_URL}/vehicle`,
			vehicle
		);
	} catch (e) {
		throw e;
	}
};