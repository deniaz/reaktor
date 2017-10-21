import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const Link = ({ href, text }) => <a href={href}>{text}</a>;

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const GenericButton = props => (props.onClick ? <Button {...props} /> : <Link {...props} />);

GenericButton.propTypes = {
  onClick: PropTypes.func,
};

GenericButton.defaultProps = {
  onClick: null,
};

export default GenericButton;
