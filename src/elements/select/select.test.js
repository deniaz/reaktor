import React from 'react';
import { create } from 'react-test-renderer';

import { Select } from '.';

describe('Element', () => {
  describe('Select', () => {
    it('matches snapshot', () => {
      const fn = jest.fn();
      const component = create(<Select name="Name" options={[]} />);
      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
