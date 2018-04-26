import React from 'react';

import { Button } from '../../elements/button';
import { Display } from '../../identity/typography/display';
import { Lettering } from '../../identity/typography/lettering';
import { Title } from '../../identity/typography/title';
import { className as mergeClassName } from '../../utils/class-name';
import styles from './ticket.scss';

export const Ticket = ({
  title,
  description,
  price,
  expiry,
  soldOut = false,
  soldTickets = 0,
  onBuy = () => {},
  className,
}) => (
  <div className={mergeClassName([className, styles.ticket])}>
    <Title>{title}</Title>
    <Lettering secondary>{description}</Lettering>
    <Display accent>€{price}</Display>
    <Button onClick={onBuy} label={soldOut ? 'Sold Out' : 'Buy Tickets'} primary={!soldOut} disabled={soldOut} large />
    <Lettering secondary>{soldOut ? 'These tickets have sold out' : `Available until ${expiry}`}</Lettering>
    {!soldOut && <Lettering secondary>Sold Tickets: {soldTickets}</Lettering>}
  </div>
);
