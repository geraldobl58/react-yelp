/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import styles from './SearchBar.module.css';

export function SearchBar(props) {
  const [term, setTerm] = useState(props.term || '');
  const [location, setLocation] = useState(props.location || '');

  const sizeClass = props.small ? '' : 'is-medium ';

  function handleOnSubmit(event) {
    event.preventDefault();

    if (props.search && typeof props.search === 'function') {
      props.search(term, location);
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
            value={term}
            onChange={(event) => setTerm(event.target.value)}
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
            value={location}
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
