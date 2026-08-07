import { render, screen } from '@testing-library/react';

import App from './App';

test('renders the Be Strong Fitness homepage landmark', () => {
  render(<App />);

  expect(screen.getByRole('main')).toBeInTheDocument();
});
