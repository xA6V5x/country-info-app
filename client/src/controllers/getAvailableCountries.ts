import axios from 'axios';

const NEXT_PUBLIC_GET_AVAILABLE_COUNTRIES = process.env.NEXT_PUBLIC_GET_AVAILABLE_COUNTRIES;

export const getAvailableCountries = async () => {
     if (NEXT_PUBLIC_GET_AVAILABLE_COUNTRIES) {
          const availableCountries = await axios.get(NEXT_PUBLIC_GET_AVAILABLE_COUNTRIES);
          return availableCountries.data;
     }
     return;
};
