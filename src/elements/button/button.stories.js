import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Button } from '.';

const stories = storiesOf('02 — Elements/Button', module);

stories.addDecorator(withKnobs);
stories
  .add('Regular Button', () => (
    <Button
      label={text('Label', 'A nifty button')}
      primary={boolean('Primary', true)}
      large={boolean('Large', true)}
      disabled={boolean('Disabled', false)}
      onClick={action('Button#onClick')}
    />
  ))
  .add('Button as Link', () => (
    <Button
      label={text('Label', 'Link that looks like a button')}
      primary={boolean('Primary', true)}
      large={boolean('Large', true)}
      disabled={boolean('Disabled', false)}
      href="http://example.com"
    />
  ));
