/* eslint-disable react/prop-types */
import React from 'react';

import { SearchResult } from '../SearchResult';
import { Spinner } from '../Spinner';

import styles from './SearchResults.module.css';

export function SearchResults({ businesses }) {
  let searchResults = <Spinner />;
  if (businesses && businesses.length) {
    searchResults = businesses.map((card) => (
      <SearchResult key={card.id} businesses={card} />
    ));
  }

  return <div className={styles['search-results']}>{searchResults}</div>;
}
