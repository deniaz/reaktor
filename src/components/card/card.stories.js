import { boolean, text, withKnobs } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Card } from '.';
import { Button } from '../../elements/button';
import { Lettering } from '../../identity/typography/lettering';

const stories = storiesOf('03 — Components/Card', module);

stories.addDecorator(withKnobs);
stories
  .add('Card w/ Image', () => (
    <Card title={text('Title', `I'm a Card`)} image={text('Image URL', 'https://bit.ly/2IMJ8rX')}>
      <Lettering>
        {text(
          'Content',
          `Man muss sich nicht unbedingt ins Flugzeug setzen, um etwas zu erleben und sich zu entspannen – auch die Schweiz hat als Feriendestination Überraschungen zu bieten.`,
        )}
      </Lettering>
      <Button primary label="Click me" />
    </Card>
  ))
  .add('Card w/o Image', () => (
    <Card title={text('Title', `I'm a Card`)}>
      <Lettering>
        {text(
          'Content',
          `Man muss sich nicht unbedingt ins Flugzeug setzen, um etwas zu erleben und sich zu entspannen – auch die Schweiz hat als Feriendestination Überraschungen zu bieten.`,
        )}
      </Lettering>
      <Button accent label="Click me" />
    </Card>
  ));
