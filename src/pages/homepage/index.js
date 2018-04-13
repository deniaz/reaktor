import React from 'react';

import { Header } from '../../components/header';
import { Hero } from '../../components/hero';
import heroImage from '../../components/hero/demo.jpg';
import { TextImage } from '../../components/text-image';
import textImage from '../../components/text-image/demo.jpg';
import { TicketListing } from '../../compositions/ticket-listing';
import { Headline } from '../../identity/typography/headline';
import { Lettering } from '../../identity/typography/lettering';
import { Title } from '../../identity/typography/title';
import styles from './homepage.scss';
import { Link } from '../../elements/link';

const tickets = [
  {
    title: 'Super Early Bird Tickets',
    description: 'Full Conference Pass',
    price: 299,
    expiry: 'May 21st',
    soldOut: true,
  },
  { title: 'Early Bird Tickets', description: 'Full Conference Pass', price: 399, expiry: 'July 30th' },
  { title: 'Full Price Tickets', description: 'Full Conference Pass', price: 499, expiry: 'August 31st' },
];

export const Homepage = () => [
  <Header />,
  <Hero title="My Conf Switzerland" img={heroImage}>
    {[<Headline>Where we meet, to meet.</Headline>, <Title>January 19th, 2019</Title>, <Title>Schiffbau, Zurich</Title>]}
  </Hero>,
  <div className={styles.spacer} />,
  <TextImage img={textImage}>
    {[
      <Headline accent>An Amazing Space</Headline>,
      <Lettering>
        Join us at an amazing space. Alte Sihlpapierfabrik is the perfect place to unlock your creativity. We made some
        layout improvements so that you will have a better view to the stages and generally a bit more room to roam.
      </Lettering>,
      <Lettering>
        Join us at an amazing space. <Link href="#">Alte Sihlpapierfabrik</Link> is the perfect place to unlock your
        creativity. We made some layout improvements so that you will have a better view to the stages and generally a bit
        more room to roam.
      </Lettering>,
    ]}
  </TextImage>,
  <div className={styles.spacer} />,
  <TicketListing title="Buy a ticket" tickets={tickets} />,
];
