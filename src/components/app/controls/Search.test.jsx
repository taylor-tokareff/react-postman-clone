import React from 'react';
import { render } from '@testing-library/react';
import SearchControls from './Search.jsx';

describe('SearchControls component', () => {
  it('renders searchControls', () => {
    const { asFragment } = render(
      <SearchControls
        url="plasscage.com"
        method="put"
        putBody="name: cage"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
