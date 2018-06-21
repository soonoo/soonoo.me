import React from 'react';
import items from '../constants/navigationItems';
import { Link } from 'react-router-dom';

const Header = () => (
	<header>
		<div className='navigation-row'>
			{items.map((item, index) => <Link key={index} to={item.link}>{item.title}</Link>)}				
		</div>
	</header>
);

export default Header;

