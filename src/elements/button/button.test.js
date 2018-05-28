import React from 'react';
import { create } from 'react-test-renderer';

import { Button } from '.';

describe('Element', () => {
  describe('Button', () => {
    it('matches snapshot', () => {
      const fn = jest.fn();
      const component = create(<Button label="Button" onClick={fn} />);
      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
