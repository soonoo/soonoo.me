import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import { fetchPostList } from './redux/actions';
import Header from './components/Header';
import PostList from './components/PostList';

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  ),
);

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Route path='/blah' component={PostList} />
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

