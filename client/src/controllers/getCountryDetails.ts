import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const GET_AVAILABLE_COUNTRIES =
     process.env.GET_AVAILABLE_COUNTRIES || 'http://localhost:3001/countries/';

export const getCountryDetails = async ({ id }: { id: string }) => {
     if (GET_AVAILABLE_COUNTRIES) {
          const countryDetails = await axios.get(`${GET_AVAILABLE_COUNTRIES}${id}`);
          return countryDetails.data;
     }
     return;
};
