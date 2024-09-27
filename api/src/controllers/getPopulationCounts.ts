import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

type GetBorderCountriesListProps = { id: string };

type PopulationCount = {
     year: number;
     value: number;
};

type CountryProps = {
     country: string;
     code: string;
     iso3: string;
     populationCounts: PopulationCount[];
};

const GET_POPULATION_COUNTS = process.env.GET_POPULATION_COUNTS || '';

export const getPopulationCounts = async ({ id }: GetBorderCountriesListProps) => {
     try {
          const { data } = await axios.get(GET_POPULATION_COUNTS);

          const countriesArray = data.data;

          const { populationCounts } = countriesArray.find(
               (country: CountryProps) =>
                    country.code.toLocaleLowerCase() === id.toLocaleLowerCase(),
          );

          return populationCounts;
     } catch (error) {
          throw { message: 'Error getting country population', details: error };
     }
};
