import { combineReducers } from 'redux';
import navigationItems from '../constants/navigationItems';

function selectedMenu(state = navigationItems[0].title, action) {
  switch (action.type) {
    case 'SELECT_MENU':
      return action.menu;
    default:
      return state;
  }
}

function postList(state = {
  isFetching: false,
  list: [],
}, action) {
  switch (action.type) {
    case 'REQUEST_POST_LIST':
      return Object.assign({}, state, {
        isFetching: true,
      });
    case 'RECEIVE_POST_LIST':
      return Object.assign({}, state, {
        isFetching: false,
        list: action.list,
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  selectedMenu,
  postList,
});

export default rootReducer;

