import axios from 'axios';

export const saveDriver = async (customer) => {
	try {
		return await axios.post(
			`${import.meta.env.VITE_API_BASE_URL}/api/v2/driver`,
			customer
		);
	} catch (e) {
		throw e;
	}
};