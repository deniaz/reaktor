import React from 'react';

import styles from './text-image.scss';

export const TextImage = ({ img, right, children }) => (
  <div className={styles.container}>
    <div className={styles.image} style={{ backgroundImage: `url(${img})` }} />
    <div className={styles.text}>{children}</div>
  </div>
);
