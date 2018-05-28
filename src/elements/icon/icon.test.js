import React from 'react';
import { create } from 'react-test-renderer';

import { Icon } from '.';

describe('Element', () => {
  describe('Icon', () => {
    it('matches snapshot', () => {
      const fn = jest.fn();
      const component = create(<Icon />);
      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
