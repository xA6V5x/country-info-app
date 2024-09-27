import { getBorderCountriesList } from './getBorderCountriesList';
import { getCountryFlag } from './getCountryFlag';
import { getPopulationCounts } from './getPopulationCounts';
import { IDProp } from '../types';

export const getCountryDetails = async ({ id }: IDProp) => {
     // {borders: List of Border Countries, populationCounts: Population Data, flag: Flag URL}
     let country = { commonName: '', borders: [], populationCounts: [], flag: '' };

     try {
          // get information
          const { commonName, borders } = await getBorderCountriesList({ id });
          // all countries in "countries/population/" have a 3-letter code and AvailableCountries only gives me 2-letter codes, so here I have to use the name
          const populationCounts = await getPopulationCounts({ commonName });
          const flag = await getCountryFlag({ id });

          // update country template
          commonName && (country.commonName = commonName);
          borders && (country.borders = borders);
          populationCounts && (country.populationCounts = populationCounts);
          flag && (country.flag = flag);

          return country;
     } catch (error) {
          throw { message: 'Error getting country details', details: error };
     }
};
