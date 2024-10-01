import { GET_AVAILABLE_COUNTRIES } from '@/defaultValues';
import axios from 'axios';

export const getCountryDetails = async ({ id }: { id: string }) => {
     if (GET_AVAILABLE_COUNTRIES) {
          const countryDetails = await axios.get(`${GET_AVAILABLE_COUNTRIES}${id}`);
          return countryDetails.data;
     }
     return;
};
