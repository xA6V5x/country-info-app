'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getCountryDetails } from '@/controllers';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import { PopulationChart } from '@/components';
import Spiner from '@/components/Spiner/Spiner';

export default function CountryDetails() {
     const { countryCode } = useParams() as { countryCode: string };

     const [country, setCountry] = useState([]);

     useEffect(() => {
          (async () => {
               const availablesCountries = await getCountryDetails({ id: countryCode });
               setCountry(availablesCountries);
          })();
     }, [countryCode]);

     if (country.length === 0) {
          return <Spiner />;
     }

     return (
          <div className={styles.page}>
               <section className={styles.headerContainer}>
                    <h2 className={styles.countryName}>{country.commonName}</h2>
                    <Image
                         src={country.flag}
                         height={70}
                         width={100}
                         alt={`${country.commonName} flag`}
                    />
               </section>
               <section>
                    {country?.borders?.length > 0 && (
                         <>
                              <h3 className={styles.countryName}>Border Countries</h3>
                              {country?.borders?.map((borderCountry, index) => {
                                   return (
                                        <p key={index}>
                                             <Link href={`/countries/${borderCountry.countryCode}`}>
                                                  {borderCountry.commonName} (
                                                  {borderCountry.countryCode})
                                             </Link>
                                        </p>
                                   );
                              })}
                         </>
                    )}
               </section>
               <PopulationChart populationData={country.populationCounts} />
          </div>
     );
}
