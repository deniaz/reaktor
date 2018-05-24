import { arrayOf, bool, func, shape, string } from 'prop-types';
import React from 'react';

import { Radio } from '../../elements/radio';
import { Label } from '../../identity/typography/label';

export const RadioGroup = ({ label, options }) => (
  <div>
    <Label>{label}</Label>
    <div>{options.map((option) => <Radio {...option} />)}</div>
  </div>
);
RadioGroup.propTypes = {
  label: string.isRequired,
  options: arrayOf(
    shape({
      label: string,
      name: string.isRequired,
      value: string.isRequired,
      checked: bool,
      onChange: func,
    }),
  ).isRequired,
};
