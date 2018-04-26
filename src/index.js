import React from 'react';
import { render } from 'react-dom';

import { Button } from './elements/button';

const container = document.createElement('div');
document.body.appendChild(container);
render(
  <p>
    <Button label="hihi" />
  </p>,
  container,
);
