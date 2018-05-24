import React from 'react';

import styles from './header.scss';
// import logo from './logo.png';
import { Navigation } from './navigation';

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <a href="#" className={styles['logo-area']}>
        {/*<img className={styles.logo} src={logo} alt="MyConf" />*/}
        <span>MyConf</span>
      </a>

      <Navigation className={styles.navigation} />
    </div>
  </header>
);
