import React from 'react';
import { render } from '@testing-library/react';
import Side from './Side';

describe('Side component', () => {
  it('renders url and method', () => {
    const { asFragment } = render(
      <Side
        u="placecage.com"
        m="GET"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
