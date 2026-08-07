import { render, screen } from '@testing-library/react';

import { SectionHeading } from './SectionHeading';

test('renders a labelled editorial section heading', () => {
  render(<SectionHeading eyebrow="Built for progress" title="Train with purpose" />);

  expect(screen.getByText('Built for progress')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Train with purpose' })).toHaveAttribute(
    'data-size',
    'section',
  );
});
