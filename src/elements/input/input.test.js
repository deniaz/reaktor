import React from 'react';
import { create } from 'react-test-renderer';

import { Input } from '.';

describe('Element', () => {
  describe('Input', () => {
    it('matches snapshot', () => {
      const fn = jest.fn();
      const component = create(<Input name="Name" value="Foo" />);
      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
