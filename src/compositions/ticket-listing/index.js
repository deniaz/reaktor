import React from 'react';

import { Ticket } from '../../components/ticket';
import { Headline } from '../../identity/typography/headline';
import styles from './ticket-listing.scss';
import { className } from '../../utils/class-name';

export const TicketListing = ({ title, tickets = [] }) => (
  <div className={styles['ticket-listing']}>
    <div className={styles.container}>
      <Headline className={styles.title} accent>
        {title}
      </Headline>

      {tickets.map(({ title, description, price, expiry, soldOut = false }) => (
        <Ticket
          key={title}
          className={styles.item}
          title={title}
          description={description}
          price={price}
          expiry={expiry}
          soldOut={soldOut}
        />
      ))}
    </div>
  </div>
);
