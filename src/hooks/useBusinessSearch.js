/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import * as api from '../services/api';

export function useBusinessSearch(term, location) {
  const [businesses, setBusinesses] = useState([]);
  const [amountResults, setAmountResults] = useState();
  const [searchParams, setSearchParams] = useState({ term, location });

  useEffect(() => {
    setBusinesses([]);

    const fetchData = async () => {
      try {
        const rawData = await api.get('/businesses/search', searchParams);
        const response = await rawData.json();
        setBusinesses(response.businesses);
        setAmountResults(response.total);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [searchParams]);

  return [businesses, amountResults, searchParams, setSearchParams];
}
