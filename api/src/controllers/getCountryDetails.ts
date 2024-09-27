import { getBorderCountriesList } from './getBorderCountriesList';
import { getCountryFlag } from './getCountryFlag';
import { getPopulationCounts } from './getPopulationCounts';
import { IDProp } from '../types';

export const getCountryDetails = async ({ id }: IDProp) => {
     // {borders: List of Border Countries, populationCounts: Population Data, flag: Flag URL}
     let country = { borders: [], populationCounts: [], flag: '' };

     try {
          // get information
          const borders = await getBorderCountriesList({ id });
          const populationCounts = await getPopulationCounts({ id });
          const flag = await getCountryFlag({ id });

          // update country template
          borders && (country.borders = borders);
          populationCounts && (country.populationCounts = populationCounts);
          flag && (country.flag = flag);

          return country;
     } catch (error) {
          throw { message: 'Error getting country details', details: error };
     }
};
