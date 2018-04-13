import React from 'react';

import styles from './lettering.scss';
import { className } from '../../../utils/class-name';

export const Lettering = ({ children, secondary = false, accent = false }) => (
  <p
    className={className([
      styles.lettering,
      secondary && styles['lettering--secondary'],
      accent && styles['lettering--accent'],
    ])}>
    {children}
  </p>
);
