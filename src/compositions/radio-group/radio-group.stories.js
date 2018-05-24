import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { RadioGroup } from '.';

const stories = storiesOf('04 — Compositions/RadioGroup', module);

stories.addDecorator(withKnobs);
stories.add('Radio Group', () => (
  <RadioGroup
    label="Your Favourite Food?"
    options={[
      { label: 'Burger', name: 'food', value: 'burger' },
      { label: 'Pizza', name: 'food', value: 'pizza' },
      { label: 'Veggies', name: 'food', value: 'veggies' },
    ]}
  />
));
