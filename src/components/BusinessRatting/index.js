import React from 'react';

import Rating from 'react-rating';

import styles from './BusinessRatting.module.css';

export function BusinessRatting() {
  return (
    <div className={styles.rating}>
      <Rating
        emptySymbol="far fa-star"
        fullSymbol="fas fa-star"
        fractions={2}
        readonly
        initialRating={3}
      />
      <p>634 Visitas</p>
    </div>
  );
}
