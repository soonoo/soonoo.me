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

const rootReducer = combineReducers({
  selectedMenu,
});

export default rootReducer;

