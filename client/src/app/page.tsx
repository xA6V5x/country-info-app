'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './page.module.css';
import dotenv from 'dotenv';
dotenv.config();

const GET_AVAILABLE_COUNTRIES = process.env.GET_AVAILABLE_COUNTRIES || '';

export default function Home() {
     const [countries, setCountries] = useState([]);

     const getAvailableCountries = async () => {
          const availableCountries = await axios.get('http://localhost:3001/countries');
          setCountries(availableCountries.data);
     };

     useEffect(() => {
          getAvailableCountries();
     }, []);

     return (
          <div className={styles.page}>
               {countries.map((country, index) => {
                    return (
                         <p key={index}>
                              {country.name} ({country.countryCode})
                         </p>
                    );
               })}
          </div>
     );
}
