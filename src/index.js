import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './elements/button';

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(
  <p>
    <Button label="hihi" />
  </p>,
  container,
);
