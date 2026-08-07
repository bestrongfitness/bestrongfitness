import { render, screen } from '@testing-library/react';

import App from './App';

test('renders one homepage title and its primary visit action', () => {
  render(<App />);

  expect(screen.getByRole('main')).toBeInTheDocument();
  expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  const visitLinks = screen.getAllByRole('link', { name: /visit the gym/i });
  expect(visitLinks.length).toBeGreaterThanOrEqual(2);
  visitLinks.forEach((link) => {
    expect(link).toHaveAttribute('href', '#visit');
  });
});
