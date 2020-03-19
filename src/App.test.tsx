import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders component', () => {
  const { getByText } = render(<App debug={true} />);
  const dashboardTitle = getByText(/My Website/i);
  expect(dashboardTitle).toBeInTheDocument();
});
