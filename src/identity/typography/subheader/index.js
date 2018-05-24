import React from 'react';

import { className } from '../../../utils/class-name';
import styles from './subheader.scss';

export const Subheader = ({ children, secondary = false, accent = false }) => (
  <h4
    className={className([
      styles.subheader,
      secondary && styles['subheader--secondary'],
      accent && styles['subheader--accent'],
    ])}>
    {children}
  </h4>
);
