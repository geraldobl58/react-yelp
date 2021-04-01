import React from 'react';

import styles from './Search.module.css';

export function Search() {
  return (
    <div>
      <div className="field has-addons">
        <p className="control">
          <button type="button" className="button is-static is-medium">
            Pesquisar
          </button>
        </p>
        <p className="control">
          <input
            type="text"
            className={`input is-medium ${styles['input-control']}`}
            placeholder="Hamburgers, Barbeiros, Spas"
          />
        </p>
        <p className="control">
          <button type="button" className="button is-static is-medium">
            Perto
          </button>
        </p>
        <p className="control">
          <input
            type="text"
            className={`input is-medium ${styles['input-control']}`}
            placeholder="Lugar"
          />
        </p>
        <div className={`button is-medium ${styles['search-button']}`}>
          <span className={`icon is-small ${styles['search-icon']}`}>
            <i className="fas fa-search" />
          </span>
        </div>
      </div>
    </div>
  );
}
