import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

type GetCountryFlagProps = { id: string };

type CountryProps = {
     flag: string;
     iso2: string;
     iso3: string;
};

const GET_COUNTRY_FLAG = process.env.GET_COUNTRY_FLAG || '';

export const getCountryFlag = async ({ id }: GetCountryFlagProps) => {
     try {
          const { data } = await axios.get(GET_COUNTRY_FLAG);

          const countriesArray = data.data;

          // in the endpoint GET_COUNTRY_FLAG are many countries missing
          const country = countriesArray.find(
               (country: CountryProps) =>
                    country.iso2.toLocaleLowerCase() === id.toLocaleLowerCase() ||
                    country.iso3.toLocaleLowerCase() === id.toLocaleLowerCase(),
          );

          const flag = country?.flag || '';

          return flag;
     } catch (error) {
          throw { message: 'Error getting country flag', details: error };
     }
};
