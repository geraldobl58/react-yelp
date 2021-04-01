import React from 'react';

import { SearchBar } from '../SearchBar';

import logoImg from '../../assets/images/logo.png';

import styles from './NavBar.module.css';

export function NavBar() {
  return (
    <div className={styles['nav-bar']}>
      <img className={styles.logo} src={logoImg} alt="Logo" />
      <SearchBar small />
      <button type="button" className={`button ${styles['nav-button']}`}>
        Login
      </button>
      <button type="button" className={`button ${styles['nav-button']}`}>
        Registre-se
      </button>
    </div>
  );
}