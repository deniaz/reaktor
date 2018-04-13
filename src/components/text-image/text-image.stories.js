import { storiesOf } from '@storybook/react';
import React from 'react';

import { TextImage } from '.';
import { Lettering } from '../../identity/typography/lettering';
import { Headline } from '../../identity/typography/headline';
import image from './demo.jpg';

storiesOf('TextImage', module).add('TextImage', () => (
  <TextImage img={image}>
    {[
      <Headline accent>An Amazing Space</Headline>,
      <Lettering>
        Join us at an amazing space. Alte Sihlpapierfabrik is the perfect place to unlock your creativity. We made some
        layout improvements so that you will have a better view to the stages and generally a bit more room to roam.
      </Lettering>,
    ]}
  </TextImage>
));
