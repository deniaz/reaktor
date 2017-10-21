import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Button from '../../../src/components/atoms/button';

Enzyme.configure({ adapter: new Adapter() });

describe('components', () => {
  describe('atoms', () => {
    describe('button', () => {
      it('renders correctly.', () => {
        const clickHandler = jest.fn();
        const tree = renderer.create(<Button onClick={clickHandler} text="Example" />).toJSON();

        expect(tree).toMatchSnapshot();
      });

      it('handles click correctly.', () => {
        const clickHandler = jest.fn();
        const wrapper = shallow(<Button onClick={clickHandler} text="Example" />);
        wrapper.simulate('click');
        expect(clickHandler).toHaveBeenCalledTimes(1);
      });
    });
  });
});
