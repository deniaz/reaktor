import { storiesOf } from '@storybook/react';
import React from 'react';

import { Link } from '../../elements/link';
import { Display } from './display';
import { Headline } from './headline';
import { Lettering } from './lettering';
import { Title } from './title';

storiesOf('Typography', module)
  .add('Display', () => (
    <div>
      <Display>This is a display</Display>
      <Display secondary>This is a display</Display>
      <Display accent>This is a display</Display>
    </div>
  ))
  .add('Headline', () => (
    <div>
      <Headline>This is a headline</Headline>
      <Headline secondary>This is a headline</Headline>
      <Headline accent>This is a headline</Headline>
    </div>
  ))
  .add('Title', () => (
    <div>
      <Title>This is a title</Title>
      <Title secondary>This is a title</Title>
      <Title accent>This is a title</Title>
    </div>
  ))
  .add('Lettering', () => (
    <div>
      <Lettering>
        This is some text with an <Link href="#">important link</Link> in any free form.
      </Lettering>
      <Lettering secondary>
        This is some text with an <Link href="#">important link</Link> in any free form.
      </Lettering>
      <Lettering accent>
        This is some text with an <Link href="#">important link</Link> in any free form.
      </Lettering>
    </div>
  ));
