import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import HeaderItem from './HeaderItem';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <HeaderItem to='/href'>
          Hello world
        </HeaderItem>
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

