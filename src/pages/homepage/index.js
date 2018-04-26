import ApolloClient from 'apollo-boost';
import React from 'react';
import { ApolloProvider } from 'react-apollo';

import { Header } from '../../components/header';
import { Hero } from '../../components/hero';
import heroImage from '../../components/hero/demo.jpg';
import { TextImage } from '../../components/text-image';
import textImage from '../../components/text-image/demo.jpg';
import AllTickets from '../../containers/all-tickets';
import SoldTickets from '../../containers/sold-tickets';
import { Link } from '../../elements/link';
import { Headline } from '../../identity/typography/headline';
import { Lettering } from '../../identity/typography/lettering';
import { Title } from '../../identity/typography/title';
import styles from './homepage.scss';

const client = new ApolloClient({
  uri: 'https://api.graphcms.com/simple/v1/cjfzhpc2936vz01434f93nlvm',
  ops: {
    credentials: 'same-origin',
  },
});

export const Homepage = () => (
  <ApolloProvider client={client}>
    <div>
      <Header />
      <Hero title="My Conf Switzerland" img={heroImage}>
        {[<Headline>For the players.</Headline>, <Title>January 19th, 2019</Title>, <Title>Schiffbau, Zurich</Title>]}
      </Hero>
      <div className={styles.spacer} />
      <TextImage img={textImage}>
        {[
          <Headline accent>An Amazing Space</Headline>,
          <Lettering>
            Join us at an amazing space. Alte Sihlpapierfabrik is the perfect place to unlock your creativity. We made some
            layout improvements so that you will have a better view to the stages and generally a bit more room to roam.
          </Lettering>,
          <Lettering>
            Join us at an amazing space. <Link href="#">Alte Sihlpapierfabrik</Link> is the perfect place to unlock your
            creativity. We made some layout improvements so that you will have a better view to the stages and generally a
            bit more room to roam.
          </Lettering>,
        ]}
      </TextImage>
      <div className={styles.spacer} />
      <AllTickets title="Buy a ticket" />
      <SoldTickets />
    </div>
  </ApolloProvider>
);
