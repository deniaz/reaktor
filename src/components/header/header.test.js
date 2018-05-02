import React from 'react';
import { create } from 'react-test-renderer';

import { Header } from '.';

describe('Component', () => {
  describe('Header', () => {
    it('matches snapshot', () => {
      const component = create(<Header />);
      const tree = component.toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
