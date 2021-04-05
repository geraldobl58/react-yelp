import React from 'react';

import { NavBar } from '../../components/NavBar';
import { SubNav } from '../../components/SubNav';
import { SearchResultsSummary } from '../../components/SearchResultsSummary';

export function Search() {
  return (
    <div>
      <NavBar />
      <SubNav />
      <SearchResultsSummary />
    </div>
  );
}
