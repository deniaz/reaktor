import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Input } from '.';

const stories = storiesOf('02 — Elements/Input', module);

stories.addDecorator(withKnobs);
stories.add('Input', () => (
  <Input
    label={text('Label', "What's your name?")}
    name="name"
    value={text('Value', 'Elon')}
    onChange={() => action('Checkbox#change')}
  />
));
