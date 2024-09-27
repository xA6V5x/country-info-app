'use client';
import React, { useEffect, useState } from 'react';
import { getAvailableCountries } from '@/controllers';
import Link from 'next/link';
import styles from './page.module.css';

export default function Countries() {
     const [countries, setCountries] = useState([]);

     useEffect(() => {
          (async () => {
               const availablesCountries = await getAvailableCountries();
               setCountries(availablesCountries);
          })();
     }, []);

     return (
          <div className={styles.page}>
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
