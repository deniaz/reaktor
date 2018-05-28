import { action } from '@storybook/addon-actions';
import { select, text, withKnobs } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Select } from '.';

const stories = storiesOf('02 — Elements/Select', module);

stories.addDecorator(withKnobs);
stories.add('Select', () => (
  <Select
    label={text('Label', "What's your favourite food?")}
    name="food"
    value={select('Value', ['pizza', 'burger'])}
    options={[
      { label: 'Pizza', value: 'pizza' },
      { label: 'Burger', value: 'burger' },
      { label: 'Veggies', value: 'veggies', disabled: true },
    ]}
    onChange={(val) => action('Select#change', val)}
  />
));
