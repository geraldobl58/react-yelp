/* eslint-disable react/prop-types */
import React from 'react';

import styles from './SubNavItem.module.css';

export function SubNavItem({ label, icon, showRightBorder }) {
  const borderClass = showRightBorder ? styles['right-border'] : '';

  return (
    <div className="dropdown is-hoverable">
      <div className="dropdown-trigger">
        <div
          className={`${styles['sub-nav-item']} ${borderClass}`}
          type="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu4"
        >
          <span className="icon is-small">
            <i className={`fa ${icon}`} />
          </span>
          <span>{label}</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true" />
          </span>
        </div>
      </div>
      <div className="dropdown-menu" id="dropdown-menu4" role="menu">
        <div className="dropdown-content">
          <div className="dropdown-item">
            <p>saasdasdasfdsadjsafdgasgdfagsdfg</p>
          </div>
        </div>
      </div>
    </div>
  );
}
