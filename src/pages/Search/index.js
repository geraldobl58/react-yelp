/* eslint-disable no-shadow */
import React from 'react';
import useReactRouter from 'use-react-router';

import { NavBar } from '../../components/NavBar';
import { SubNav } from '../../components/SubNav';
import { SearchResultsSummary } from '../../components/SearchResultsSummary';
import { SearchResults } from '../../components/SearchResults';

import { useBusinessSearch } from '../../hooks/useBusinessSearch';

export function Search() {
  const { location, history } = useReactRouter();
  const params = new URLSearchParams(location.search);
  const term = params.get('find_desc');
  const locationParams = params.get('find_loc');
  const [
    businesses,
    amountResults,
    searchParams,
    performSearch,
  ] = useBusinessSearch(term, locationParams);

  if (!term || !locationParams) {
    history.push('/');
  }

  function search(term, location) {
    const encodedTerm = encodeURI(term);
    const encodedLocation = encodeURI(location);
    history.push(
      `/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}`
    );
    performSearch({ term, location });
  }

  return (
    <div>
      <NavBar term={term} location={locationParams} search={search} />
      <SubNav />
      <SearchResultsSummary
        term={searchParams.term}
        location={searchParams.location}
        amountResults={amountResults}
        showResults={businesses ? businesses.length : 0}
      />
      <SearchResults businesses={businesses} />
    </div>
  );
}
