import { storiesOf } from '@storybook/react';
import React from 'react';

import { Link } from '../../elements/link';
import { Display } from './display';
import { Headline } from './headline';
import { Lettering } from './lettering';
import { Subheader } from './subheader';
import { Title } from './title';
import { Label } from './label';

storiesOf('01 — Identity/Typography', module)
  .add('Regular Typography', () => (
    <div>
      <Display>This is a display</Display>
      <Headline>This is a headline</Headline>
      <Title>This is a title</Title>
      <Subheader>This is a subheader</Subheader>
      <Lettering>
        This is some text with an <Link href="#">important link</Link> in any free form.
      </Lettering>
      <Label>This is a label</Label>
    </div>
  ))
  .add('Secondary Typography', () => (
    <div>
      <Display secondary>This is a display</Display>
      <Headline secondary>This is a headline</Headline>
      <Title secondary>This is a title</Title>
      <Subheader secondary>This is a subheader</Subheader>
      <Lettering secondary>
        This is some text with an <Link href="#">important link</Link> in any free form.
      </Lettering>
      <Label secondary>This is a label</Label>
    </div>
  ))
  .add('Accented Typography', () => (
    <div>
      <Display accent>This is a display</Display>
      <Headline accent>This is a headline</Headline>
      <Title accent>This is a title</Title>
      <Subheader accent>This is a subheader</Subheader>
      <Lettering accent>
        This is some text with an <Link href="#">important link</Link> in any free form.
      </Lettering>
      <Label accent>This is a label</Label>
    </div>
  ));
