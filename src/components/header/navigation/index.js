import React from 'react';

import { Button } from '../../../elements/button';
import { className as mergeClassName } from '../../../utils/class-name';
import styles from './navigation.scss';

const navItems = ['Speakers', 'Workshops', 'Venue', 'Sponsors', 'About'];

export const Navigation = ({ className }) => (
  <nav className={mergeClassName([className, styles.navigation])}>
    <ul>
      {navItems.map((item, index) => (
        <li key={`nav-item--${index}`} className={styles['list-item']}>
          <a className={styles['navigation-link']} href="#">
            {item}
          </a>
        </li>
      ))}
      <li className={styles['list-item']}>
        <Button label="Tickets" primary />
      </li>
    </ul>
  </nav>
);
