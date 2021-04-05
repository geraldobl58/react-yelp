import React from 'react';
import { Link } from 'react-router-dom';

import { SearchBar } from '../SearchBar';

import logoImg from '../../assets/images/logo.png';

import styles from './NavBar.module.css';

export function NavBar({ term, location }) {
  return (
    <div className={styles['nav-bar']}>
      <Link to="/">
        <img className={styles.logo} src={logoImg} alt="Logo" />
      </Link>
      <SearchBar small term={term} location={location} />
      <button type="button" className={`button ${styles['nav-button']}`}>
        Login
      </button>
      <button type="button" className={`button ${styles['nav-button']}`}>
        Registre-se
      </button>
    </div>
  );
}
