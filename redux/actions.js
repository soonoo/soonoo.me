import fetch from 'isomorphic-fetch';

export function selectMenu(menu) {
  return {
    type: 'SELECT_MENU',
    menu,
  };
}

export function requestPostList() {
  return {
    type: 'REQUEST_POST_LIST',
  };
}

export function receivePostList(list) {
  return {
    type: 'RECEIVE_POST_LIST',
    list,
  };
}

export function fetchPostList() {
  return function (dispatch) {
    dispatch(requestPostList());

    return fetch(`http://soonoo.me/api/post/32`)
      .then(response => response.json())
      .then(json => dispatch(receivePostList(json)));
  };
}

