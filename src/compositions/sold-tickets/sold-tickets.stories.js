import React from 'react';
import { storiesOf } from '@storybook/react';
import { SoldTickets } from '.';

storiesOf('SoldTickets', module).add('SoldTickets', () => <SoldTickets count={123} />);
