/* eslint-disable react/prop-types */
import React from 'react';

import styles from './SearchBar.module.css';

export function SearchBar({ small }) {
  const sizeClass = small ? '' : 'is-medium ';

  return (
    <div>
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
          />
        </p>
        <p className="control">
          <button type="button" className={`button is-static ${sizeClass}`}>
            Perto
          </button>
        </p>
        <p className="control">
          <input
            type="text"
            className={`input ${sizeClass} ${styles['input-control']}`}
            placeholder="Lugar"
          />
        </p>
        <div className={`button ${sizeClass} ${styles['search-button']}`}>
          <span className={`icon is-small ${styles['search-icon']}`}>
            <i className="fas fa-search" />
          </span>
        </div>
      </div>
    </div>
  );
}
