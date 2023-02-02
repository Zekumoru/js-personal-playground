import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

describe('Counter', () => {
  // it('shows count to 0 on first render', () => {
  //   render(<App />);

  //   expect(screen.getByText(/count/i)).toHaveTextContent('0');
  // });

  // it('increments count to 1 on button click', () => {
  //   render(<App />);
  //   act(() => {
  //     screen.getByRole('button').click();
  //   });

  //   expect(screen.getByText(/count/i)).toHaveTextContent('1');
  // });

  it('increments count to 3 on triple click', () => {
    render(<App />);
    console.clear();
    act(() => {
      for (let i = 0; i < 3; i++) {
        screen.getByRole('button').click();
      }
    });

    /**
     * Internal hypothetical mechanism of act()
     * 1. Calls the callback
     *     - Any set states are added to the states work queue
     *     - Any effects are added to the effects work queue
     * 2. Execute all set states from the states work queue
     * 3. Re-render components
     * 4. Execute all effects from the effects work queue
     * 5. Return
     */

    /**
     * Based on the behavior shown by act()
     * 1. It groups and call all set states
     * 2. Re-renders components
     * 3. Call all effects
     *
     * Basically, act() does one update cycle.
     */

    expect(screen.getByText(/count/i)).toHaveTextContent('3');
  });
});
