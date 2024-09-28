import axios from 'axios';

const NEXT_PUBLIC_GET_AVAILABLE_COUNTRIES = process.env.NEXT_PUBLIC_GET_AVAILABLE_COUNTRIES;

export const getCountryDetails = async ({ id }: { id: string }) => {
     if (NEXT_PUBLIC_GET_AVAILABLE_COUNTRIES) {
          const countryDetails = await axios.get(`${NEXT_PUBLIC_GET_AVAILABLE_COUNTRIES}${id}`);
          return countryDetails.data;
     }
     return;
};
