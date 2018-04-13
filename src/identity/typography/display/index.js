import React from 'react';

import { className as mergeClassName } from '../../../utils/class-name';
import styles from './display.scss';

export const Display = ({ className, children, secondary = false, accent = false }) => (
  <h1
    className={mergeClassName([
      className,
      styles.display,
      secondary && styles['display--secondary'],
      accent && styles['display--accent'],
    ])}>
    {children}
  </h1>
);
