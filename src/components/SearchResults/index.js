/* eslint-disable react/prop-types */
import React from 'react';
import { SearchResult } from '../SearchResult';

import styles from './SearchResults.module.css';

export function SearchResults({ businesses }) {
  if (!businesses || !businesses.length) {
    return <div />;
  }

  const renderSearchResults = businesses.map((card) => (
    <SearchResult key={card.id} businesses={card} />
  ));

  return <div className={styles['search-results']}>{renderSearchResults}</div>;
}
