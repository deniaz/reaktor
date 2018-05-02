import { storiesOf } from '@storybook/react';
import React from 'react';

import { Hero } from '.';
import { Headline } from '../../identity/typography/headline';
import { Title } from '../../identity/typography/title';

import demo from './demo.jpg';

storiesOf('03 — Components/Hero', module)
  .add('Hero', () => (
    <Hero title="My Conf Switzerland">
      {[<Headline>Where we meet, to meet.</Headline>, <Title>January 19th, 2019</Title>, <Title>Schiffbau, Zurich</Title>]}
    </Hero>
  ))
  .add('Hero with image', () => (
    <Hero img={demo} title="My Conf Switzerland">
      {[<Headline>Where we meet, to meet.</Headline>, <Title>January 19th, 2019</Title>, <Title>Schiffbau, Zurich</Title>]}
    </Hero>
  ));
