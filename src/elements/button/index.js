import { bool, func, string } from 'prop-types';
import React, { createElement, cloneElement } from 'react';

import { className } from '../../utils/class-name';
import styles from './button.scss';

export const Button = ({ label = null, href, primary = false, large = false, disabled = false, onClick }) => {
  const DOMElement = href ? 'a' : 'button';

  if (!!href && !!onClick) {
    console.warn(`Cannot have href and onClick`);
  }

  const props = {
    disabled,
    onClick,
    href,
  };

  return (
    <DOMElement
      {...props}
      className={className([
        styles.button,
        primary && styles['button--primary'],
        large && styles['button--large'],
        disabled && styles['button--disabled'],
      ])}>
      {label}
    </DOMElement>
  );
};

Button.propTypes = {
  label: string.isRequired,
  primary: bool,
  large: bool,
  disabled: bool,
  onClick: func,
  href: string,
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
