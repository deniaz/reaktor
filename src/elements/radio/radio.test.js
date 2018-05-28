import React from 'react';
import { create } from 'react-test-renderer';

import { Radio } from '.';

describe('Element', () => {
  describe('Radio', () => {
    it('matches snapshot', () => {
      const fn = jest.fn();
      const component = create(<Radio name="Name" value="Foo" />);
      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
