'use client';
import React, { useEffect, useState } from 'react';
import { getAvailableCountries } from '@/controllers';
import Link from 'next/link';
import styles from './page.module.css';
import Spiner from '@/components/Spiner/Spiner';

export default function Countries() {
     const [countries, setCountries] = useState([]);

     useEffect(() => {
          (async () => {
               const availablesCountries = await getAvailableCountries();
               setCountries(availablesCountries);
          })();
     }, []);

     if (countries.length === 0) {
          return <Spiner />;
     }

     return (
          <div className={styles.page}>
               <h2>Select a Country</h2>
               {countries.map((country, index) => {
                    return (
                         <p key={index}>
                              <Link href={`/countries/${country.countryCode}`}>
                                   {country.name} ({country.countryCode})
                              </Link>
                         </p>
                    );
               })}
          </div>
     );
}
