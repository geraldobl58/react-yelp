import React from 'react';
import { BusinessRatting } from '../BusinessRatting';

import styles from './SearchResult.module.css';

export function SearchResult() {
  return (
    <div className={styles['search-result']}>
      <img
        className={styles['businnes-image']}
        src="https://via.placeholder.com/210"
        alt="burger"
      />
      <div className={styles['businnes-info']}>
        <h2 className="subtitle">Burder place</h2>
        <BusinessRatting />
        <p>Rating</p>
        <p>
          R$<span className="tag">Burgers</span>
          <span className="tag">Fast Food</span>
        </p>
      </div>
      <div className={styles['contact-info']}>
        <p>11645546657</p>
        <p>Rua: John Doe</p>
        <p>343 Vila Rica</p>
      </div>
    </div>
  );
}
