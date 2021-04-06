import React from 'react';
import useReactRouter from 'use-react-router';

import { useParams } from 'react-router';
import { NavBar } from '../../components/NavBar';
import { SubNav } from '../../components/SubNav';
import { SearchResultsSummary } from '../../components/SearchResultsSummary';
import { SearchResults } from '../../components/SearchResults';

import { useBusinessSearch } from '../../hooks/useBusinessSearch';

export function Search() {
  const { location } = useReactRouter();
  const params = new URLSearchParams(location.search);
  const term = params.get('find_desc');
  const locationParams = params.get('find_loc');
  const [
    businesses,
    amountResults,
    searchParams,
    setSearchParams,
  ] = useBusinessSearch(term, locationParams);

  return (
    <div>
      <NavBar term={term} location={locationParams} />
      <SubNav />
      <SearchResultsSummary term={term} location={locationParams} />
      <SearchResults businesses={businesses} />
    </div>
  );
}
