import React from 'react';
import { render } from '@testing-library/react';
import BottomDisplay from './BottomDisplay.jsx';

describe('BottomDisplay component', () => {
  it('renders bottomDisplay', () => {
    const { asFragment } = render(
      <BottomDisplay
        body="name: none"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
