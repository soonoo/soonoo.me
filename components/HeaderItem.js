import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HeaderItem = ({ to, children }) => (
  <Link to={to}>
    {children}
  </Link>
);

HeaderItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default HeaderItem;

