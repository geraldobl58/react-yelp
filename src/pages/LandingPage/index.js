import React from 'react';

import { TopNav } from '../../components/TopNav';
import { Search } from '../../components/Search';
import { SearchSuggestions } from '../../components/SearchSuggestions';

import styles from './LandingPage.module.css';

import logoImg from '../../assets/images/logo.png';

export function LandingPage() {
  return (
    <div className={styles.landing}>
      <div className={styles['search-area']}>
        <TopNav />
        <img className={styles.logo} src={logoImg} alt="Logo" />
        <Search />
        <SearchSuggestions />
      </div>
    </div>
  );
}
