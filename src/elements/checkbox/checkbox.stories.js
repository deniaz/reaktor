import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Checkbox } from '.';

const stories = storiesOf('02 — Elements/Checkbox', module);

stories.addDecorator(withKnobs);
stories.add('Checkbox', () => (
  <Checkbox
    label={text('Label', 'I agree with GDPR')}
    name="gdpr"
    value="on"
    checked={boolean('Checked', false)}
    onChange={() => action('Checkbox#change')}
  />
));
