/* eslint-disable react/prop-types */
import React from 'react';

import styles from './SearchResultsSummary.module.css';

export function SearchResultsSummary({
  term,
  location,
  amountResults,
  showResults,
}) {
  let resultStats = null;

  if (amountResults && showResults) {
    resultStats = (
      <p>
        Mostrando {showResults} de {amountResults} resultados
      </p>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles['search-summary']}>
        <h1 className="subtitle">
          <strong>{term}</strong> {location}
        </h1>
        {resultStats}
      </div>
      <div className={styles.filters}>
        <button type="button" className="button">
          <span className="icon">
            <i className="fas fa-sliders-h" />
          </span>
          <span>Todos</span>
        </button>
        <div className="buttons has-addons">
          <button type="button" className="button">
            R$
          </button>
          <button type="button" className="button">
            R$ R$
          </button>
          <button type="button" className="button">
            R$ R$ R$
          </button>
        </div>
        <button type="button" className="button">
          <span className="icon">
            <i className="fas fa-clock" />
          </span>
          <span>Aberto</span>
        </button>
        <button type="button" className="button">
          <span className="icon">
            <i className="fas fa-dollar-sign" />
          </span>
          <span>Preços</span>
        </button>
      </div>
    </div>
  );
}
