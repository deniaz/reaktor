import React from 'react';
import { storiesOf } from '@storybook/react';
import { SoldTickets } from '.';

storiesOf('04 — Compositions/Sold Tickets', module).add('SoldTickets', () => <SoldTickets count={123} />);
