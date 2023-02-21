import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Greeting from '../Greeting';

describe('Greeting', () => {
  it('should show the supplied name to the DOM', () => {
    render(<Greeting name={'Altair'} />);

    expect(screen.getByText(/altair/i)).toBeInTheDocument();
  });
});
