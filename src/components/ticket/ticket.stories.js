import React from 'react';
import { storiesOf } from '@storybook/react';
import { Ticket } from '.';

storiesOf('Ticket', module)
  .add('Ticket', () => (
    <Ticket title="Early Bird Ticket" description="Full Conference Pass" price={399} expiry="July 30th" />
  ))
  .add('Sold Out Ticket', () => (
    <Ticket title="Early Bird Ticket" description="Full Conference Pass" price={399} expiry="July 30th" soldOut />
  ));
