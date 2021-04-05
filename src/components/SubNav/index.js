import React from 'react';

import { SubNavItem } from '../SubNavItem';

import styles from './SubNav.module.css';

export function SubNav() {
  return (
    <div className={styles.container}>
      <div className={styles['sub-nav']}>
        <div>
          <SubNavItem label="Restaurantes" icon="fa-utensils" />
          <SubNavItem label="Entregas" icon="fa-home" />
          <SubNavItem label="Serviços" icon="fa-car-side" />
          <SubNavItem label="Mais" icon="fa-info-circle" showRightBorder />
        </div>
        <div>
          <button type="button" className={`button ${styles['subnav-button']}`}>
            <span className="icon">
              <i className="fas fa-pen" />
            </span>
            <span>Escreva uma crítica/elogios</span>
          </button>
          <button type="button" className={`button ${styles['subnav-button']}`}>
            <span className="icon">
              <i className="fas fa-hotel" />
            </span>
            <span>Para Negócios</span>
          </button>
        </div>
      </div>
    </div>
  );
}
