import React from 'react';

import styles from './SearchSuggestions.module.css';

export function SearchSuggestions() {
  return (
    <div className={styles.suggestions}>
      <span className="icon is-small">
        <i className="fa fa-utensils" />
      </span>
      <span className={styles.suggestion}>Restaurantes</span>
      <span className="icon is-small">
        <i className="fa fa-cocktail" />
      </span>
      <span className={styles.suggestion}>Vida Noturna</span>
      <span className="icon is-small">
        <i className="fa fa-concierge-bell" />
      </span>
      <span className={styles.suggestion}>Serviços</span>
      <span className="icon is-small">
        <i className="fa fa-truck" />
      </span>
      <span className={styles.suggestion}>Entregas</span>
    </div>
  );
}
