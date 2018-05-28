import React from 'react';
import { create } from 'react-test-renderer';

import { Link } from '.';

describe('Element', () => {
  describe('Link', () => {
    it('matches snapshot', () => {
      const fn = jest.fn();
      const component = create(<Link href="#">A Link</Link>);
      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
