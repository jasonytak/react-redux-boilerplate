import React from 'react';
import renderer from 'react-test-renderer';


it('renders correctly', () => {
  const tree = renderer
    .create(<div>Hello</div>);
  expect(tree).toMatchSnapshot();
});
