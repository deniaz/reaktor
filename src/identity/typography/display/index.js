import React from 'react';

import { className } from '../../../utils/class-name';
import styles from './display.scss';

export const Display = ({ children, secondary = false, accent = false }) => {
  console.info(accent, styles);
  return (
    <h1
      className={className([
        styles.display,
        secondary && styles['display--secondary'],
        accent && styles['display--accent'],
      ])}>
      {children}
    </h1>
  );
};
