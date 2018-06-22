import React from 'react';
import items from '../constants/navigationItems';
import HeaderItem from './HeaderItem';

const Header = () => (
  <header>
    <div className='navigation-row'>
      {items.map((item, index) => (
        <HeaderItem key={index.toString()} to={item.link}>
          {item.title}
        </HeaderItem>
      ))}
    </div>
  </header>
);

export default Header;

