import React from 'react';
import { render } from '@testing-library/react';
import SideDisplay from './SideDisplay.jsx';

describe('sideDisplay component', () => {
  it('renders ul', () => {
    const { asFragment } = render(
      <SideDisplay />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
