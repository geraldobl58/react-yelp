/* eslint-disable react/prop-types */
import React from 'react';
import { BusinessRatting } from '../BusinessRatting';

import styles from './SearchResult.module.css';

export function SearchResult({ businesses }) {
  if (!businesses) {
    return <div />;
  }

  const tags = businesses.categories.map((category) => (
    <span
      className={`tag ${styles['businesses-tags']}`}
      key={businesses.id + category.title}
    >
      {category.title}
    </span>
  ));

  const addressLines = businesses.location.display_address.map(
    (addressLine) => <p key={businesses.id + addressLine}>{addressLine}</p>
  );

  return (
    <div className={styles['search-result']}>
      <img
        className={styles['businnes-image']}
        src={businesses.image_url}
        alt="burger"
      />
      <div className={styles['businnes-info']}>
        <h2 className="subtitle">{businesses.name}</h2>
        <BusinessRatting
          reviewCount={businesses.review_count}
          rating={businesses.rating}
        />
        <p>
          {businesses.price} {tags}
        </p>
      </div>
      <div className={styles['contact-info']}>
        <p>{businesses.phone}</p>
        {addressLines}
      </div>
    </div>
  );
}
