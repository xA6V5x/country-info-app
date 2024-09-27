import axios from 'axios';
import { IDProp } from '../types';
import dotenv from 'dotenv';
dotenv.config();

const GET_BORDER_COUNTRIES_LIST = process.env.GET_BORDER_COUNTRIES_LIST || '';

export const getBorderCountriesList = async ({ id }: IDProp) => {
     try {
          const { data } = await axios.get(`${GET_BORDER_COUNTRIES_LIST}${id}`);

          const { commonName, borders } = data;

          return { commonName, borders };
     } catch (error) {
          throw { message: 'Error getting country border countries', details: error };
     }
};
