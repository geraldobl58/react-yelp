import React from 'react';

import useReactRouter from 'use-react-router';

import { TopNav } from '../../components/TopNav';
import { SearchBar } from '../../components/SearchBar';
import { SearchSuggestions } from '../../components/SearchSuggestions';

import styles from './LandingPage.module.css';

import logoImg from '../../assets/images/logo.png';

export function LandingPage() {
  const { history } = useReactRouter();

  function search(term, location) {
    const urlEncodedTerm = encodeURI(term);
    const urlEncodedLocation = encodeURI(location);

    history.push(
      `/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
    );
  }

  return (
    <div className={styles.landing}>
      <div className={styles['search-area']}>
        <TopNav />
        <img className={styles.logo} src={logoImg} alt="Logo" />
        <SearchBar search={search} />
        <SearchSuggestions />
      </div>
    </div>
  );
}
