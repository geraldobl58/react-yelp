/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import styles from './SearchBar.module.css';

export function SearchBar({ small, terms, locations, search }) {
  const [term, setTerms] = useState(terms || '');
  const [location, setLocation] = useState(locations || '');

  const sizeClass = small ? '' : 'is-medium ';

  function handleOnSubmit(event) {
    event.preventDefault();
    console.log(term, location);

    if (search && typeof search === 'function') {
      search(term, location);
    }
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="field has-addons">
        <p className="control">
          <button type="button" className={`button is-static ${sizeClass}`}>
            Pesquisar
          </button>
        </p>
        <p className="control">
          <input
            type="text"
            className={`input ${sizeClass} ${styles['input-control']}`}
            placeholder="Hamburgers, Barbeiros, Spas"
            onChange={(event) => setTerms(event.target.value)}
          />
        </p>
        <span className="control">
          <div className={`button is-static ${sizeClass}`}>Perto</div>
        </span>
        <p className="control">
          <input
            type="text"
            className={`input ${sizeClass} ${styles['input-control']}`}
            placeholder="Lugar"
            onChange={(event) => setLocation(event.target.value)}
          />
        </p>
        <div
          className={`button ${sizeClass} ${styles['search-button']}`}
          onClick={handleOnSubmit}
        >
          <span className={`icon is-small ${styles['search-icon']}`}>
            <i className="fas fa-search" />
          </span>
        </div>
      </div>
    </form>
  );
}
