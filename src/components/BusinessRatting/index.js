/* eslint-disable react/prop-types */
import React from 'react';

import Rating from 'react-rating';

import styles from './BusinessRatting.module.css';

export function BusinessRatting({ reviewCount, rating }) {
  return (
    <div className={styles.rating}>
      <Rating
        emptySymbol="far fa-star"
        fullSymbol="fas fa-star"
        fractions={2}
        readonly
        initialRating={rating}
      />
      <p>{reviewCount} Visitas</p>
    </div>
  );
}
