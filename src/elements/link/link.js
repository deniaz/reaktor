import React from 'react';

import styles from './link.scss';

export const Link = ({ href, children }) => (
  <a href={href} className={styles.link}>
    {children}
  </a>
);
