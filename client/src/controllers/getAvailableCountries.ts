import { GET_AVAILABLE_COUNTRIES } from '@/defaultValues';
import axios from 'axios';

export const getAvailableCountries = async () => {
     if (GET_AVAILABLE_COUNTRIES) {
          const availableCountries = await axios.get(GET_AVAILABLE_COUNTRIES);
          return availableCountries.data;
     }
     return;
};
