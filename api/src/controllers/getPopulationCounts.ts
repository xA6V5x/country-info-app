import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

type GetPopulationCountsProps = { commonName: string };

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

export const getPopulationCounts = async ({ commonName }: GetPopulationCountsProps) => {
     try {
          const { data } = await axios.get(GET_POPULATION_COUNTS);

          const countriesArray = data.data;

          // all countries in "population" have a 3-letter code and AvailableCountries only gives me 2-letter codes, so here I have to use the name to compare
          const { populationCounts } = countriesArray.find(
               (country: CountryProps) =>
                    country.country.toLocaleLowerCase() === commonName.toLocaleLowerCase(),
          );

          return populationCounts;
     } catch (error) {
          throw { message: 'Error getting country population', details: error };
     }
};
