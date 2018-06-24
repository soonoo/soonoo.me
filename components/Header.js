import React from 'react';
import HeaderItem from './HeaderItem';
import items from '../constants/navigationItems';
import Logo from './Logo';
import '../static/stylesheets/header.scss';

const Header = () => (
  <header>
    <Logo />
    <div className='navigation-row'>
      {items.map((item, index) => (
        <HeaderItem to={item.link} key={index.toString()}>
          {item.title}
        </HeaderItem>
      ))}
    </div>
  </header>
);

export default Header;

