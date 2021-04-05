import React from 'react';
import useReactRouter from 'use-react-router';

import { NavBar } from '../../components/NavBar';
import { SubNav } from '../../components/SubNav';
import { SearchResultsSummary } from '../../components/SearchResultsSummary';
import { SearchResults } from '../../components/SearchResults';

export function Search() {
  const { location } = useReactRouter();
  const params = new URLSearchParams(location.search);
  const term = params.get('find_desc');
  const locationParams = params.get('find_loc');

  return (
    <div>
      <NavBar term={term} location={locationParams} />
      <SubNav />
      <SearchResultsSummary term={term} location={locationParams} />
      <SearchResults />
    </div>
  );
}
