import React from 'react';
import { create } from 'react-test-renderer';

import { Checkbox } from '.';

describe('Element', () => {
  describe('Checkbox', () => {
    it('matches snapshot', () => {
      const fn = jest.fn();
      const component = create(<Checkbox name="Name" value="Obama" />);
      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
