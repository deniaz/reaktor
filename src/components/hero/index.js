import React from 'react';

import { Display } from '../../identity/typography/display';
import { className } from '../../utils/class-name';
import styles from './hero.scss';

const style = (img = null) => (img !== null ? { style: { backgroundImage: `url(${img})` } } : {});

export const Hero = ({ img = null, title, children }) => {
  return (
    <div className={className([styles.hero, img && styles['hero-image']])} {...style(img)}>
      <div className={styles.container}>
        <Display className={styles.title} accent={!!img}>
          {title}
        </Display>

        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
