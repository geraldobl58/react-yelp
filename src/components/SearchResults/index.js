import React from 'react';
import { SearchResult } from '../SearchResult';

import styles from './SearchResults.module.css';

export function SearchResults() {
  return (
    <div className={styles['search-results']}>
      <SearchResult />
    </div>
  );
}
