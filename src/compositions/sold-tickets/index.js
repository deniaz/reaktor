import React from 'react';

import { Display } from '../../identity/typography/display';
import { Lettering } from '../../identity/typography/lettering';
import styles from './sold-tickets.scss';

export const SoldTickets = ({ count }) => (
  <div className={styles.wrap}>
    <Lettering>We've already sold a couple of tickets!</Lettering>
    <Display accent>{count}</Display>
  </div>
);
