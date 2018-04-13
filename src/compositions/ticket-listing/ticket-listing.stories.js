import React from 'react';
import { storiesOf } from '@storybook/react';
import { TicketListing } from '.';

storiesOf('TicketListing', module).add('TicketListing', () => (
  <TicketListing
    title="Buy a ticket"
    tickets={[
      {
        title: 'Super Early Bird Tickets',
        description: 'Full Conference Pass',
        price: 299,
        expiry: 'May 21st',
        soldOut: true,
      },
      { title: 'Early Bird Tickets', description: 'Full Conference Pass', price: 399, expiry: 'July 30th' },
      { title: 'Full Price Tickets', description: 'Full Conference Pass', price: 499, expiry: 'August 31st' },
    ]}
  />
));
