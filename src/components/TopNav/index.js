import React from 'react';

import styles from './TopNav.module.css';

export function TopNav() {
  return (
    <div className={styles['top-nav']}>
      <div className={styles.left}>
        <span>Escreva uma crítica</span>
        <span>Eventos</span>
      </div>
      <div className={styles.right}>
        <span>Login</span>
        <span className="button">Inscrever-se</span>
      </div>
    </div>
  );
}
