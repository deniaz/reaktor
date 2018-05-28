import { text, withKnobs } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Link } from '.';
import { Lettering } from '../../identity/typography/lettering';

const stories = storiesOf('02 — Elements/Link', module);

stories.addDecorator(withKnobs);
stories.add('Link', () => (
  <Lettering>
    <Link href={text('URL', '#')}>{text('Label', 'My lovely link')}</Link>
  </Lettering>
));
