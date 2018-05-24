import { arrayOf, bool, func, shape, string } from 'prop-types';
import React from 'react';

export const Select = ({ label, name, value, options, multiple = false, onChange = () => {} }) => (
  <label>
    {label && <span>{label}</span>}
    <select name={name} multiple={multiple} onChange={onChange} value={value}>
      {options.map(({ disabled, label, selected, value }) => (
        <option disabled={disabled} value={value}>
          {label}
        </option>
      ))}
    </select>
  </label>
);

Select.propTypes = {
  label: string,
  name: string.isRequired,
  value: string,
  options: arrayOf(
    shape({
      disabled: bool,
      label: string.isRequired,
      selected: bool,
      value: string,
    }),
  ).isRequired,
  onChange: func,
};
