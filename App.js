import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';

const App = () => (
	<Router>
		<Header />	
	</Router>
); 

ReactDOM.render(<App />, document.getElementById('root'));

