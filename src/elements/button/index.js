import { bool, func, string } from 'prop-types';
import React, { createElement, cloneElement } from 'react';

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

Button.propTypes = {
  label: string.isRequired,
  primary: bool,
  large: bool,
  disabled: bool,
  onClick: func,
};

// export const LinkButton = ({ href, children, ...props }) => {
//   return
//   // const element = <Button {...props} />;

//   const link = createElement('a', {
//     href,
//     ...props,
//   });

//   console.info(element);
//   console.info(link);
//   // console.info(ref);
//   console.log('---');

//   return link;
// };
