import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import Header from './components/Header';

const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

