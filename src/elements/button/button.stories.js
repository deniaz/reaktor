import { storiesOf } from '@storybook/react';
import React from 'react';

import { Button } from '.';

const noop = () => {};

storiesOf('02 — Elements/Button', module)
  .add('Primary Button Large', () => <Button label="Button Text" primary large onClick={noop} />)
  .add('Primary Button', () => <Button label="Button Text" primary onClick={() => {}} />)
  .add('Secondary Button', () => <Button label="Button Text" onClick={() => {}} />)
  .add('Disabled Button', () => <Button label="Button Text" disabled onClick={() => {}} />)
  .add('Button as Link', () => <Button label="I'm a Link" primary href="http://example.com" />);
