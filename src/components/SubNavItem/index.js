/* eslint-disable react/prop-types */
import React from 'react';

export function SubNavItem({ label, icon }) {
  return (
    <div className="dropdown is-hoverable">
      <div className="dropdown-trigger">
        <button
          type="button"
          className="button"
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
        </button>
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
