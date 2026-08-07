import { render, screen } from '@testing-library/react';

import { googleMapsUrl } from '../../data/site-content';
import { Reviews } from './Reviews';

test('renders an accessible reviews region with the Google Maps destination', () => {
  render(<Reviews />);

  expect(screen.getByRole('region', { name: /member reviews/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /read more on google/i })).toHaveAttribute('href', googleMapsUrl);
  expect(screen.getByRole('button', { name: /next review/i })).toBeEnabled();
});
