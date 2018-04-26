import React from 'react';

import { className } from '../../utils/class-name';
import styles from './button.scss';

export const Button = ({ label, primary = false, large = false, disabled = false, onClick = () => {} }) => (
  <button
    className={className([
      styles.button,
      primary && styles['button--primary'],
      large && styles['button--large'],
      disabled && styles['button--disabled'],
    ])}
    disabled={disabled}
    onClick={onClick}>
    {label}
  </button>
);
