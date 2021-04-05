import React from 'react';

import { NavBar } from '../../components/NavBar';
import { SubNav } from '../../components/SubNav';
import { SearchResultsSummary } from '../../components/SearchResultsSummary';
import { SearchResults } from '../../components/SearchResults';

export function Search() {
  return (
    <div>
      <NavBar />
      <SubNav />
      <SearchResultsSummary />
      <SearchResults />
    </div>
  );
}
