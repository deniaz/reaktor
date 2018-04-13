import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '.';

storiesOf('Button', module)
  .add('Primary Button Large', () => <Button label="Button Text" primary large />)
  .add('Primary Button', () => <Button label="Button Text" primary />)
  .add('Secondary Button', () => <Button label="Button Text" />)
  .add('Disabled Button', () => <Button label="Button Text" disabled />);
