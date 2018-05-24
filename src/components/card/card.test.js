import React from 'react';
import { create } from 'react-test-renderer';

import { Card } from '.';

describe('Component', () => {
  describe('Card', () => {
    describe('w/ Image', () => {
      it('matches snapshot', () => {
        const component = create(
          <Card title="I'm a Card" image="https://bit.ly/2IMJ8rX">
            <p>yolo</p>
          </Card>,
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
      });
    });

    describe('w/o Image', () => {
      it('matches snapshot', () => {
        const component = create(
          <Card title="I'm a Card">
            <p>yolo</p>
          </Card>,
        );
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
      });
    });
  });
});
