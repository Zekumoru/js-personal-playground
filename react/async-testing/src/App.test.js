import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

window.fetch = jest.fn(() => {
  const user = { name: 'Axios', email: 'axios@test.com' };
  return Promise.resolve({
    json: () => Promise.resolve(user),
  });
});

describe('Test fetching user', () => {
  it('shows loading text while API request is in progress', async () => {
    render(<App />);
    const loading = screen.getByText('Loading...');

    expect(loading).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));
  });

  it('renders the user name after being fetched', async () => {
    render(<App />);
    const userName = await screen.findByText('Axios');
    expect(userName).toBeInTheDocument();
  });

  it('shows an error message', async () => {
    window.fetch.mockImplementationOnce(() => {
      return Promise.reject({ message: 'API is down' });
    });

    render(<App />);

    const errorMessage = await screen.findByText('API is down');
    expect(errorMessage).toBeInTheDocument();
  });
});
