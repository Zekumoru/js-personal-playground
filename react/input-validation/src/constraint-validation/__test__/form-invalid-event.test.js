import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('Invalid event on form submit', () => {
  test('that the form triggers an invalid event if input elements are invalid', async () => {
    // Problem:
    //   <form> is submitted even if inputs are invalid hence the
    //   act below triggers the needed invalid events for this test
    // GitHub issue: jsdom/jsdom#2898
    const handleInvalid = jest.fn();
    const user = userEvent.setup();
    render(
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="input">Input:</label>
        {/* Notice that the input here is required*/}
        <input id="input" type="text" onInvalid={handleInvalid} required />
        <button>Submit</button>
      </form>
    );

    // submitting the form will STILL submit and
    // won't call that it's invalid (since the input
    // is empty and it is required)
    await user.click(screen.getByRole('button'));

    expect(() => {
      expect(handleInvalid).toHaveBeenCalledTimes(1);
    }).toThrow(/expected number of calls/i);

    // the workaround is to fire the invalid event
    // ourselves, it is OPTIONAL to click the submit button
    // but be aware that it'll fire submit events
    // (Note: In an actual browser, if a form is invalid,
    //   because one of its input elements is invalid,
    //   it won't fire submit events)
    await user.click(screen.getByRole('button'));
    act(() => {
      screen.getByLabelText(/input/i).dispatchEvent(
        new InputEvent('invalid', {
          bubbles: true,
          cancelable: true,
        })
      );
    });

    expect(handleInvalid).toHaveBeenCalledTimes(1);
  });
});
