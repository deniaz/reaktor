import React from 'react';

import { className } from '../../utils/class-name';
import styles from './button.scss';

export const Button = ({ label, primary = false, large = false, disabled = false }) => (
  <button
    className={className([
      styles.button,
      primary && styles['button--primary'],
      large && styles['button--large'],
      disabled && styles['button--disabled'],
    ])}
    disabled={disabled}>
    {label}
  </button>
);
