import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Radio } from '.';

const stories = storiesOf('02 — Elements/Radio', module);

stories.addDecorator(withKnobs);
stories.add('Radio', () => (
  <Radio
    label={text('Label', 'I agree with GDPR')}
    name="gdpr"
    value="on"
    checked={boolean('Checked', false)}
    onChange={() => action('Radio#change')}
  />
));
