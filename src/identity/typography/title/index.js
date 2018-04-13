import React from 'react';

import { className } from '../../../utils/class-name';
import styles from './title.scss';

export const Title = ({ children, secondary = false, accent = false }) => (
  <h3 className={className([styles.title, secondary && styles['title--secondary'], accent && styles['title--accent']])}>
    {children}
  </h3>
);
