import React from 'react';

import { className as mergeClassName } from '../../../utils/class-name';
import styles from './headline.scss';

export const Headline = ({ children, secondary = false, accent = false, className }) => (
  <h2
    className={mergeClassName([
      className,
      styles.headline,
      secondary && styles['headline--secondary'],
      accent && styles['headline--accent'],
    ])}>
    {children}
  </h2>
);
