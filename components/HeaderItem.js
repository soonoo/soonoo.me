import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const HeaderItem = ({ to, children }) => (
  <NavLink exact to={to}>
    {children}
  </NavLink>
);

HeaderItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default HeaderItem;

