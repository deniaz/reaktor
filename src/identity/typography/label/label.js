import React from 'react';

import { className as getClassName } from '../../../utils/class-name';
import styles from './label.scss';

export const Label = ({ children, secondary = false, accent = false, className = '' }) => (
  <span
    className={getClassName([
      className,
      styles.Label,
      secondary && styles['Label--secondary'],
      accent && styles['Label--accent'],
    ])}>
    {children}
  </span>
);
